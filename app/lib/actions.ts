"use server";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { z } from "zod";

// validation of the form, not so important here but added anyway.
const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  contact: z.string().min(1, { message: "Contact Info is required." }),
  customerMessage: z.string().min(1, { message: "Message is required." }),
  date: z.string(),
});

// Validation of the edit/create form for menu items
const editFormSchema = z.object({
  id: z.string({
    message: "Please select a customer.",
  }),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  image_url: z.string().min(1, { message: "Link for an image is required" }),
  date: z.string(),
});

const CreateMenuItem = editFormSchema.omit({ date: true });
const CreateFeedback = FormSchema.omit({ date: true });

export type ContactFormState = {
  errors?: {
    name?: string[];
    contact?: string[];
    customerMessage?: string[];
  };
  message?: null | string;
};

// This function, as useFormState dictates, supposed to return promise with new state, that you can use later to display in form.
export async function createFeedback(
  prevState: ContactFormState,
  formData: FormData
) {
  const validatedFields = CreateFeedback.safeParse({
    name: formData.get("name"),
    contact: formData.get("contact"),
    customerMessage: formData.get("customerMessage"),
  });

  //If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Message.",
    };
  }

  // Extract values, add current Date.
  const { name, contact, customerMessage } = validatedFields.data;
  const now = new Date();
  const dateTime =
    now.toISOString().split("T")[0] +
    " " +
    now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  try {
    await sql`
    INSERT INTO feedback (name, contact, customermessage, date)
    VALUES (${name}, ${contact}, ${customerMessage}, ${dateTime})
    `;
    // return {
    //   message: "Successfully Sent Feedback",
    // };
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Feedback",
    };
  }

  // Redirect back to Home page.
  revalidatePath("/");
  redirect("/");
}
