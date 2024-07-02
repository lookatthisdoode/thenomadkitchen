"use client";
import { Button } from "@/app/ui/button";
import { useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";

export default function LoginForm() {
  const newUrl = useSearchParams().get("callbackUrl");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const credentials = {
      email: form.email.value,
      password: form.password.value,
    };

    // validation happening inside of server action that has
    const error = await authenticate(credentials);

    // If there is an error it will be displayed below the form otherwise go to dashboard
    if (error) {
      setErrorMessage(error);
    } else {
      router.push(newUrl || "/dashboard");
    }
  };

  return (
    <div
      className={`bg-background w-full h-screen flex justify-center items-center`}
    >
      <Suspense fallback={null}>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className={` mb-3 text-2xl`}>Please log in to continue.</h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] px-2 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                  {/*<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />*/}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] px-2 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                  {/*<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />*/}
                </div>
              </div>
            </div>
            <LoginButton />
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  {/*<ExclamationCircleIcon className="h-5 w-5 text-red-500" />*/}
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </div>
        </form>
      </Suspense>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="mt-6 w-full bg-background text-foreground text-xl hover:text-nomadTextGray hover:border-2"
      aria-disabled={pending}
    >
      {/*Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />*/}
      Log In
    </Button>
  );
}
