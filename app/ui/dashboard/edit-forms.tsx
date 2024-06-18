"use client";
import { MenuItemImage } from "@/app/lib/definitions";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { useFormState } from "react-dom";
import {
  editItemImage,
  editItemNoImage,
  EditFormState,
  EditFormStateNoImage,
} from "@/app/lib/actions";
import Image from "next/image";
import React, { useState } from "react";
import { checkImageUrl } from "@/app/ui/dashboard/utils";
type ImageState = {
  error: string | null;
  image: string;
};

// Forms for image or no image
export function EditItemImageForm({ item }: { item: MenuItemImage }) {
  const initialFormState: EditFormState = { message: null, errors: {} };
  const initialImageState: ImageState = {
    error: null,
    image: item.image_url ? item.image_url : "https://i.imgur.com/6YbAxG8.gif",
  };
  const [formState, dispatch] = useFormState(editItemImage, initialFormState);
  const [imageState, setImageState] = useState(initialImageState);

  const types = ["main", "dinner", "cocktail"];

  // IMPORTANT. Make proper image checker.
  const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Id (HIDDEN) */}
        <input
          id="id"
          name="id"
          defaultValue={item.id}
          className="hidden peer w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
        />

        {/* Type */}
        <div className="mb-4">
          <label htmlFor="type" className="mb-2 block text-sm font-medium">
            Choose Type
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={item.type}
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
                defaultValue={item.name}
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
                defaultValue={item.price}
                placeholder="Enter price in VND * 1000 (K)"
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
                placeholder="Description of the dish/cocktail"
                defaultValue={item.description}
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
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            Image
          </label>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image_url"
                name="image_url"
                defaultValue={imageState.image}
                onChange={(e) => handleImage(e)}
                className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {imageState.error && (
              <p className="mt-2 text-sm text-red-500" key={imageState.error}>
                {imageState.error}
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
              alt={`image of ${item.name}`}
            ></Image>
          </div>
          <div className="relative w-[100px] h-[100px]">
            <Image
              className="object-cover"
              src={imageState.image}
              fill
              alt={`image of ${item.name}`}
            ></Image>
          </div>
        </div>

        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {formState.message && (
            <p className="mt-2 text-sm text-red-500">{formState.message}</p>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Edit Item</Button>
        </div>
      </div>
    </form>
  );
}
export function EditItemNoImageForm({ item }: { item: MenuItemImage }) {
  const initialFormState: EditFormStateNoImage = { message: null, errors: {} };
  const [formState, dispatch] = useFormState(editItemNoImage, initialFormState);

  const types = ["side", "drink"];

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Id */}
        <input
          id="id"
          name="id"
          defaultValue={item.id}
          className=" hidden peer w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
        />

        {/* Type */}
        <div className="mb-4">
          <label htmlFor="type" className="mb-2 block text-sm font-medium">
            Choose Type
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={item.type}
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
                defaultValue={item.name}
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
                defaultValue={item.price}
                placeholder="Enter price in VND * 1000 (K)"
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

        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {formState.message && (
            <p className="mt-2 text-sm text-red-500">{formState.message}</p>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Edit Item</Button>
        </div>
      </div>
    </form>
  );
}