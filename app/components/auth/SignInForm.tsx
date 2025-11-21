"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useAuthActions } from "@/hooks/useAuthActions";
import { LoginRequestType } from "@/types/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const { loginMutation } = useAuthActions();

  const onSubmit = async (values: LoginRequestType) => {
    loginMutation.mutate({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[404px]">
      <h2 className="text-3xl font-semibold">Sign In</h2>
      <p className="mt-2 text-secondary">
        Welcome back! Please enter your details
      </p>

      <div className="py-[25px]">
        <div className="mb-2.5">
          <Input
            {...register("email")}
            label="Email"
            type="email"
            id="email"
            placeholder="example@gmail.com"
            inputClassName="pt-[15px] pb-4 pl-5 mt-2.5"
            autoComplete="email"
            error={errors.email ? (errors.email.message as string) : ""}
          />
        </div>

        <div>
          <Input
            {...register("password")}
            label="Password"
            type="password"
            id="password"
            placeholder="• • • • • • • •"
            inputClassName="pt-[15px] pb-4 pl-5 mt-2.5"
            autoComplete="current-password"
            error={errors.password ? (errors.password.message as string) : ""}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        className="bg-[#C8EE44] hover:bg-[#b3dd39]"
      >
        Sign In
      </Button>

      <Button
        type="button"
        className="border border-[#F2F2F2] mt-[15px] text-secondary font-semibold hover:bg-gray-100"
      >
        <Image src="/google.png" width={24} height={24} alt="Google logo" />
        Sign in with Google
      </Button>

      <p className="text-center text-sm mt-[25px] text-secondary">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-[#1b212d] relative inline-block"
        >
          Sign up
          <Image
            src="/vector.png"
            width={43}
            height={5}
            alt="Vektor icon"
            className="mt-1"
          />
        </Link>
      </p>
    </form>
  );
}
