import AuthLayout from "@/components/auth/AuthLayout";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthLayout className="mb-[105px]">
      <SignUpForm />
    </AuthLayout>
  );
}
