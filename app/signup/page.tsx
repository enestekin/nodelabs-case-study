import AuthLayout from "@/app/components/auth/AuthLayout";
import SignUpForm from "@/app/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthLayout className="mb-[105px]">
      <SignUpForm />
    </AuthLayout>
  );
}
