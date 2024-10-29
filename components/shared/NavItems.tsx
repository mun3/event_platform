'use client';

import { defaultHeaderLinks, signedInHeaderLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SheetClose } from '../ui/sheet';

const DefaultNavItems = (props: any) => {
  const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];    
  const pathname = usePathname();

  return (
    // <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
    <ul className="md:justify-start flex w-full flex-col items-start gap-5 md:flex-row">
      {defaultHeaderLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <SheetCloseWrapper {...sheetCloseWrapperProps}>
              <Link href={link.route}>{link.label}</Link>
            </SheetCloseWrapper>
          </li>
        )
      })}
    </ul>
  )
}

const SignedInNavItems = (props: any) => {
  const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];  
  const pathname = usePathname();

  return (    
    <ul className="md:justify-end flex w-full flex-col items-start gap-5 md:flex-row">
      {signedInHeaderLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <SheetCloseWrapper {...sheetCloseWrapperProps}>
              <Link href={link.route}>{link.label}</Link>
            </SheetCloseWrapper>
          </li>
        )
      })}
    </ul>
  )
}

export { SignedInNavItems, DefaultNavItems }