"use client";
import { lobster, nunito } from "@/components/ui/fonts";
import { Button } from "@/components/ui/button";
import { createContact } from "@/app/lib/actions";
import { useFormState } from "react-dom";

export default function ContactForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createContact, initialState);

  return (
    <section className="px-4 md:px-10 text-center py-10">
      <h2 className={`${lobster.className} text-4xl text-secondary mb-8`}>
        Questions? Suggestions? Reservation?
      </h2>
      <form
        action={dispatch}
        className={`bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto ${nunito.className}`}
      >
        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Contact Field */}
        <div className="mb-6">
          <label
            htmlFor="contact"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email or Phone
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <div aria-live="polite" aria-atomic="true">
            {state?.errors?.contact &&
              state.errors.contact.map((error) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="customerMessage"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
          <div aria-live="polite" aria-atomic="true">
            {state?.errors?.customerMessage &&
              state.errors.customerMessage.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </Button>
        </div>

        <div aria-live="polite" aria-atomic="true">
          {state?.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </div>
      </form>
    </section>
  );
}
