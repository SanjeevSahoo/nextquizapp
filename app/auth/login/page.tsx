"use client";

import * as Yup from "yup";
import { IAuthForm } from "../../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "../../components/ui/form";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

const initialFormValues: IAuthForm = {
  domain_id: "",
  password: "",
};

const formSchema = Yup.object().shape({
  domain_id: Yup.string()
    .trim()
    .required("Domain ID is required")
    .max(50, "Domain ID can be max 50 characters"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .max(50, "Password can be max 50 characters"),
});

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/quiz";

  const { handleSubmit, control, formState, setValue } = useForm<IAuthForm>({
    defaultValues: initialFormValues,
    resolver: yupResolver(formSchema),
  });

  const { isSubmitting } = formState;

  const handleFormSubmit: SubmitHandler<IAuthForm> = async (values) => {
    const res = await signIn("credentials", {
      redirect: false,
      ...values,
      callbackUrl,
    });

    console.log(res);
    if (!res?.error) {
      router.push(callbackUrl);
    } else {
      setError("invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-lg font-bold text-sky-800 dark:text-cyan-600">
          Autentication Required
        </h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(handleFormSubmit)();
          }}
        >
          <div className="w-[400px] flex flex-col gap-2 shadow-lg rounded-lg pt-8 pb-6 px-6 mt-4 bg-[aliceblue] bg-opacity-50 dark:bg-opacity-10 border-[1px] border-gray-200 dark:border-gray-700">
            <div className="mb-2">
              <TextField label="Domain ID" name="domain_id" control={control} />
            </div>
            <div className="mb-2">
              <TextField
                label="Password"
                name="password"
                control={control}
                type="password"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
              disabled={isSubmitting}
            >
              Sign In
            </button>
            <p className="m-2 mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
              Not Registered Yet ?
              <button
                type="button"
                className="font-normal text-blue-600 underline dark:text-blue-500 hover:no-underline"
                onClick={() => {
                  router.push("/auth/register");
                }}
              >
                Register
              </button>
            </p>
            {error && (
              <p className="text-center bg-red-300 py-4 mb-6 rounded">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
