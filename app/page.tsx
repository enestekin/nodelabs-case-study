import AuthLayout from "./components/auth/AuthLayout";
import SignInForm from "./components/auth/SignInForm";

export default function Home() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}
