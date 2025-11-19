import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="px-12 lg:pl-[135px]">
        <div className="mt-10 mb-[157px]">
          <Image src="/logo.png" height={30} width={122} alt="Maglo logo" />
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
