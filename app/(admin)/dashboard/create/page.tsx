"use client";
import { MenuItemImage } from "@/app/lib/definitions";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/ui/button";
import { checkImageUrl } from "@/app/ui/dashboard/utils";
import { useFormState } from "react-dom";
import { createItem } from "@/app/lib/actions";

export default function CreatePage() {
  const types = ["main", "dinner", "cocktail", "side", "drink"];

  const handleFormChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "main" || value === "dinner" || value === "cocktail") {
      setBigForm(true);
    } else {
      setBigForm(false);
    }
  };

  const handleImageChange = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const input = document.querySelector("#image_url") as HTMLInputElement;
    const value = input?.value;

    if (value) {
      const isValid = await checkImageUrl(value);
      if (isValid) {
        // Update your state here
        setImageState((prevState) => ({
          error: "",
          image: value,
        }));
      } else {
        setImageState((prevState) => ({
          ...prevState,
          error: "Invalid URL",
        }));
      }
    }
  };

  const [bigForm, setBigForm] = useState(false);
  const [imageState, setImageState] = useState({ image: "/", error: "" });
  const initialState = {
    message: "",
    errors: undefined,
  };
  const [formState, dispatch] = useFormState(createItem, initialState);

  // @ts-ignore
  return (
    <div className={`p-5`}>
      <form action={dispatch}>
        {/* Type */}
        <div className="mb-4">
          <label htmlFor="type" className="mb-2 block text-sm font-medium">
            Choose Type
          </label>
          <div className="relative">
            <select
              onChange={(e) => handleFormChange(e)}
              id="type"
              name="type"
              defaultValue={""}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="" disabled>
                Select type of item
              </option>
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* Error display */}
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {formState.errors?.type &&
              formState.errors.type.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                placeholder="Name of the product"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {formState.errors?.name &&
              formState.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Price ( in VND * 1000 )
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="1"
                placeholder="Price"
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {formState.errors?.price &&
              formState.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {bigForm && (
          <div className="mb-4">
            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium"
              >
                Description
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={undefined}
                    placeholder="Description of the dish/cocktail"
                    className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div id="customer-error" aria-live="polite" aria-atomic="true">
                {formState.errors?.description &&
                  formState.errors.description.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>

            {/* Image */}

            <div className="mb-4">
              <label
                htmlFor="image_url"
                className="mb-2 block text-sm font-medium"
              >
                Image ( For now only working with imgur links )
              </label>

              <div className="relative mt-2 rounded-md">
                <div className="relative flex gap-2">
                  <Button
                    onClick={(e) => handleImageChange(e)}
                    variant={"outline"}
                    className={``}
                  >
                    Update Image
                  </Button>
                  <input
                    id="image_url"
                    name="image_url"
                    placeholder={"https://i.imgur.com/6YbAxG8.gif"}
                    className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div id="customer-error" aria-live="polite" aria-atomic="true">
                {imageState.error && (
                  <p
                    className="mt-2 text-sm text-red-500"
                    key={imageState.error}
                  >
                    {imageState.error}
                  </p>
                )}
              </div>
              <div id="customer-error" aria-live="polite" aria-atomic="true">
                {formState.errors?.image_url && (
                  <p className="mt-2 text-sm text-red-500">
                    {formState.errors?.image_url}
                  </p>
                )}
              </div>
            </div>

            {/* Image wrapper */}
            <div className="w-full border rounded-md p-3 flex gap-5">
              <div className="relative w-[200px] h-[200px]">
                <Image
                  className="object-cover"
                  src={imageState.image}
                  fill
                  alt={`image of a new item`}
                ></Image>
              </div>
              <div className="relative w-[100px] h-[100px]">
                <Image
                  className="object-cover"
                  src={imageState.image}
                  fill
                  alt={`image of a new item`}
                ></Image>
              </div>
            </div>

            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {formState.message && (
                <p className="mt-2 text-sm text-red-500">{formState.message}</p>
              )}
            </div>
          </div>
        )}
        <Button variant={"outline"}>Save</Button>
      </form>
    </div>
  );
}
