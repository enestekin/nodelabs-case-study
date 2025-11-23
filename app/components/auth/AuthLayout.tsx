import Image from "next/image";
import clsx from "clsx";

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="px-12 lg:pl-[135px]">
        <div className={clsx("mt-10 mb-[157px]", className)}>
          <Image src="/logo.svg" height={30} width={122} alt="Maglo logo" />
        </div>
        {children}
      </div>

      <div className="hidden md:block">
        <Image
          src="/mainpage-img.png"
          alt="Auth Illustration"
          className="w-screen h-screen object-contain object-right"
          width={675}
          height={900}
        />
      </div>
    </div>
  );
}
