"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
// import NavItems from "./NavItems"
import { SignedInNavItems, DefaultNavItems } from "./NavItems"
import { SignedIn } from "@clerk/nextjs"


const MobileNav = () => {

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer transform scale-x-[-1]"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden" side="left">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />
          {/* <NavItems /> */}
          <DefaultNavItems withSheetClose/>
          <SignedIn>
            <SignedInNavItems withSheetClose/>
          </SignedIn>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav