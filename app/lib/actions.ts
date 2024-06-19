"use server";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { z } from "zod";

// Validation schema for feedback form.
const feedbackFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  contact: z.string().min(1, { message: "Contact Info is required." }),
  customerMessage: z.string().min(1, { message: "Message is required." }),
  date: z.string(),
});

// Validation of the edit/create form for menu items.
const editFormSchema = z.object({
  id: z.string(),
  type: z.enum(
    [
      "dinner",
      "summer-dinner",
      "salad",
      "sandwich",
      "pasta",
      "tapas",
      "cocktail",
      "drink",
      "side",
    ],
    {
      message: "Please select the type of item.",
    },
  ),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than 0." }),
  image_url: z.string().min(1, { message: "Link for an image is required" }),
});

// Items will have different validation based on type of the item.
const EditMenuItemImage = editFormSchema.omit({ id: true });
const EditMenuItemNoImage = editFormSchema.omit({
  id: true,
  description: true,
  image_url: true,
});
const CreateFeedback = feedbackFormSchema.omit({ date: true });

// Types
export type ContactFormState = {
  errors?: {
    name?: string[];
    contact?: string[];
    customerMessage?: string[];
  };
  message?: null | string;
};

export type EditFormState = {
  errors?: {
    type?: string[];
    name?: string[];
    description?: string[];
    price?: string[];
    image_url?: string[];
  };
  message?: string | null;
};

export type CreateFormState = {
  errors?: {
    type: string[] | undefined;
    name: string[];
    description?: string[];
    price: string[];
    image_url?: string[];
  };
  message?: string | null | undefined;
};

export type EditFormStateNoImage = {
  errors?: {
    type?: string[];
    name?: string[];
    price?: string[];
  };
  message?: null | string;
};

//Methods.

// This function, as useFormState dictates, supposed to return promise with new state, that you can use later to display in form.
export async function createFeedback(
  prevState: ContactFormState,
  formData: FormData,
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

// Edit Food Item
export async function editItemImage(
  prevState: EditFormState,
  formData: FormData,
) {
  const validatedFields = EditMenuItemImage.safeParse({
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    image_url: formData.get("image_url"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Edit Item.",
    };
  }

  const id = String(formData.get("id"));
  const { type, name, description, price, image_url } = validatedFields.data;

  try {
    await sql`
      UPDATE items
        SET
            type = ${type},
            name = ${name},
            description = ${description},
            price = ${price},
            image_url = ${image_url}
        WHERE
            id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error. Failed to update item.",
    };
  }

  revalidatePath("/dashboard");
  redirect(`/dashboard/mains`);
}

// Action to update sides, coffees etc., omitting description and image url, defaults them to null.
export async function editItemNoImage(
  prevState: EditFormStateNoImage,
  formData: FormData,
) {
  const validatedFields = EditMenuItemNoImage.safeParse({
    type: formData.get("type"),
    name: formData.get("name"),
    price: formData.get("price"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Edit Item.",
    };
  }

  // Main edited stuff received from form.
  const { type, name, price } = validatedFields.data;
  // ID we already know, but we don't change it.
  const id = String(formData.get("id"));
  // Default values.
  const description = null;
  const image_url = null;

  try {
    await sql`
      UPDATE items
        SET
            type = ${type},
            name = ${name},
            description = ${description},
            price = ${price},
            image_url = ${image_url}
        WHERE
            id = ${id};
  `;
  } catch (error) {
    return {
      message: "Database Error. Failed to update item.",
    };
  }

  //revalidate main page and redirect
  revalidatePath("/dashboard");
  redirect(`/dashboard/${type}s`);
}

export async function createItem(
  prevState: CreateFormState,
  formData: FormData,
) {
  // First figure out type, so we can use different parsers.
  const type = formData.get("type");
  // Returns either image or no image fields.
  const validatedFields =
    type === "main" || type === "cocktail" || type === "dinner"
      ? EditMenuItemImage.safeParse({
          type: formData.get("type"),
          name: formData.get("name"),
          description: formData.get("description"),
          price: formData.get("price"),
          image_url: formData.get("image_url"),
        })
      : EditMenuItemNoImage.safeParse({
          type: formData.get("type"),
          name: formData.get("name"),
          price: formData.get("price"),
        });

  // Return earlier if not success.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Item.",
    } as CreateFormState;
  }

  // Workaround to avoid type issues. Because one of the options does not return description and image url, gives squiggly even when those values are unused.
  const newItem: any = {
    type,
    name: validatedFields.data.name,
    price: validatedFields.data.price,
    description:
      "description" in validatedFields.data
        ? validatedFields.data.description
        : null,
    image_url:
      "image_url" in validatedFields.data
        ? validatedFields.data.image_url
        : null,
  };

  // Create new item in DB.
  try {
    await sql`
        INSERT INTO items (type, name, price, description, image_url)
        VALUES (${newItem.type}, ${newItem.name}, ${newItem.price}, ${newItem.description}, ${newItem.image_url});
        `;
  } catch (error) {
    console.log(error);
    return {
      message: "Database error. Failed to create an Item",
    };
  }

  revalidatePath("/dashboard");
  // Redirect to the page of type.
  redirect(`/dashboard/${type}s`);
}

export async function deleteItem(id: string) {
  try {
    await sql`DELETE FROM items WHERE id = ${id}`;

    // If success, just revalidate path, no need to redirect.
    revalidatePath("/dashboard/");

    // Probably useless since nothing can read this.
    return { message: "Deleted Invoice." };
  } catch (error) {
    // There will be no place to display this error as it's not a form.
    // So just log and throw for the error.tsx
    console.error(error);
    throw new Error("Database Error. Failed to Delete Item");
  }
}

export async function deleteFeedbackMessage(id: string) {
  try {
    await sql`DELETE FROM feedback WHERE id = ${id}`;

    // If success, just revalidate path, no need to redirect.
    revalidatePath("/dashboard/");

    // Probably useless since nothing can read this.
    return { message: "Deleted FeedBack." };
  } catch (error) {
    // There will be no place to display this error as it's not a form.
    // So just log and throw for the error.tsx
    console.error(error);
    throw new Error("Database Error. Failed to Delete Item");
  }
}
