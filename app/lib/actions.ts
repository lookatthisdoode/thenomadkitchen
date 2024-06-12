"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

// validation of the form, not so important here but added anyway.
const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  contact: z.string().min(1, { message: "Contact Info is required." }),
  customerMessage: z.string().min(1, { message: "Message is required." }),
  date: z.string(),
});

const CreateContact = FormSchema.omit({ date: true });

export type ContactFormState = {
  errors?: {
    name?: string[];
    contact?: string[];
    customerMessage?: string[];
  };
  message?: null | string;
};
// This function, as useFormState dictates, supposed to return promise with new state, that you can use later to display in form.
export async function createContact(
  prevState: ContactFormState,
  formData: FormData
) {
  const validatedFields = CreateContact.safeParse({
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

  const { name, contact, customerMessage } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  // Later it would add date and save it to database.

  // try {
  // 	await sql`
  // INSERT INTO invoices (customer_id, amount, status, date)
  // VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  // `;
  // } catch (error) {
  revalidatePath("/contact");
  redirect("/");
}
