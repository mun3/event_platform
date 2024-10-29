import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { SignedInNavItems, DefaultNavItems} from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <MobileNav />
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 md:w-36 md:static md:transform-none">
        {/* <Link href="/" className="w-36 sm:hidden"> */}
          <Image 
            src="/assets/images/logo.svg" width={128} height={38}
            alt="Evently logo" 
          />
        </Link>


        <nav className="md:flex hidden w-full pl-8 pr-5">
          <DefaultNavItems />
          <SignedIn>
            <SignedInNavItems />
          </SignedIn>
        </nav>

        {/* <SignedIn> */}
          {/* <nav className="md:flex-between hidden w-full max-w-xs">
            <SignedInNavItems />
          </nav> */}
        {/* </SignedIn> */}

        <div className="flex justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>          
        </div>
      </div>
    </header>
  )
}

export default Header