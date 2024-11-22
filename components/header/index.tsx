"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
  Link,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  HeartFilledIcon,
  Logo,
} from "@/components/icons";
import { usePathname } from "next/navigation";
import MobileNavDropdown, { TabProps } from "./mobile-nav-dropdown";
import { FaChevronDown } from "react-icons/fa";

export const Header = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar
      className="bg-transparent absolute z-40 w-full"
      isBlurred={false}
      maxWidth="xl"
      shouldHideOnScroll={true}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo className="text-white" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.menus.map((item, index) => {
            const label = item.label?.toLocaleLowerCase();
            const isDropdown = item.children.length > 0;
            const isActive = pathname.includes(label) || pathname === item.href ? label : "";

            if(isDropdown) {
              return (
                <Dropdown key={index}>
                  <DropdownTrigger>
                    <NavbarItem>
                      <NextLink
                        className={clsx(
                          linkStyles(),
                          isActive ? "text-primary font-bold" : "text-white",
                          "data-[active=true]:text-primary data-[active=true]:font-medium text-white",
                        )}
                        color="foreground"
                        href={item.href}
                      >
                        {item.label}
                        <FaChevronDown className="ml-2" />
                      </NextLink>
                    </NavbarItem>
                  </DropdownTrigger>
                  <DropdownMenu>
                    {item.children.map((child, idx) => (
                      <DropdownItem key={idx}>
                        <Link
                          color={isActive ? "primary" : "foreground"}
                          href="#"
                          size="lg"
                        >
                          {child.label}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              )
            }

            return(
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles(),
                    isActive ? "text-primary font-bold" : "text-white",
                    "data-[active=true]:text-primary data-[active=true]:font-medium text-white",
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            )
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-primary bg-white"
            href='/'
            variant="flat"
          >
            문의하기
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.menus.map((item, index) => {
            const label = item.label?.toLocaleLowerCase();
            const isDropdown = item.children.length > 0;
            const isActive = pathname.includes(label) || pathname === item.href ? label : "";

            if(isDropdown) {
              return (
                <MobileNavDropdown
                  key={index}
                  defaultExpandedKeys={isActive}
                  ariaLabel={label}
                  item={item as TabProps}
                  placement="bottom"
                  fullWidth
                  size="md"
                  radius='none'
                  className=''
                  classNames={{
                    base: "w-full data-[hover=true]:text-primary",
                    trigger: "w-full py-4 gap-4 px-2 data-[hover=true]:text-primary data-[open=true]:text-primary data-[open=true]:font-bold divider-y",
                    title: ["text-sm text-inherit hover:text-primary hover:font-bold data-[open=true]:text-primary"],
                  }}
                  variant="light"
                >
                {item.children.map((dropdown, idx) => {
                  return (
                    <NavbarMenuItem key={idx}>
                      <Link
                        color={isActive ? "primary" : "foreground"}
                        href={dropdown.href}
                        size="lg"
                        className="px-4"
                      >
                        {dropdown.label}
                      </Link>
                    </NavbarMenuItem>
                  )
                })}
              </MobileNavDropdown>
              )
            }

            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={isActive ? "primary" : "foreground"}
                  href="#"
                  size="lg"
                  className="px-2"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            )
          })}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
