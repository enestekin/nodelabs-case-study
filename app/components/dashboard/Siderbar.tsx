"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  DashboardIcon,
  HelpIcon,
  InvoicesIcon,
  WalletIcon,
  SettingsIcon,
  TransactionsIcon,
  LogoutIcon,
} from "@/assets/Icons";

const menu = [
  { label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: TransactionsIcon,
  },
  {
    label: "Invoices",
    href: "/dashboard/invoices",
    icon: InvoicesIcon,
  },
  {
    label: "My Wallets",
    href: "/dashboard/wallets",
    icon: WalletIcon,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-secondary-bg px-[25px] pt-[30px] pb-25 flex flex-col justify-between min-w-[250px]">
      <div>
        <Image
          src="/logo.svg"
          width={122}
          height={30}
          alt="logo"
          className="mb-10"
        />

        <nav className="flex flex-col ">
          {menu.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 pl-[15px] py-[15px] rounded-lg text-sm font-semibold min-w-[200px] ${
                  active
                    ? "bg-[#C8EE44] hover:bg-[#b3dd39]"
                    : "text-third hover:bg-gray-100"
                }`}
              >
                <Icon className={active ? "" : "text-third"} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-3 text-sm text-third">
        <Link
          href="#"
          className="flex items-center gap-3 pl-[15px] py-[15px] rounded-lg text-sm font-semibold min-w-[200px] hover:bg-gray-100"
        >
          <HelpIcon />
          Help
        </Link>
        <Link
          href="/logout"
          className="flex items-center gap-3 pl-[15px] py-[15px] rounded-lg text-sm font-semibold min-w-[200px] hover:bg-gray-100"
        >
          <LogoutIcon />
          Logout
        </Link>
      </div>
    </aside>
  );
}
