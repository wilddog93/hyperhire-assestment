"use client"

import React from 'react';
import { IconType } from 'react-icons';
import { Accordion, AccordionItem, AccordionItemProps, AccordionItemSlots, SlotsToClasses } from '@nextui-org/react';

export interface TabProps {
  label: string;
  href: string;
  children: TabProps[]
}

export interface TabsProps {
  item: TabProps;
  isOpen?: boolean;
  ariaLabel?: string;
  placement?: "top" | "bottom" | "start" | "end";
  startContent?: React.ReactNode;
  isVertical?: boolean;
  showDivider?: boolean;
  hideIndicator?: boolean;
  indicator?: React.ReactNode;
  className?: string;
  classNames?: SlotsToClasses<AccordionItemSlots>
  itemClasses?: AccordionItemProps["classNames"];
  variant?: "splitted" | "light" | "shadow" | "bordered" | undefined;
  children?: React.ReactNode | React.ReactNode[];
  defaultExpandedKeys?: string;
  [key: string]: any;
}

export default function MobileNavDropdown({
  item,
  isOpen,
  placement = "bottom",
  isVertical = false,
  showDivider = false,
  startContent,
  indicator,
  hideIndicator = false,
  children,
  ariaLabel = "Anchor",
  className,
  classNames,
  itemClasses,
  variant,
  defaultExpandedKeys = "",
  ...props
}: TabsProps) {
  return (
    <Accordion
      defaultExpandedKeys={[defaultExpandedKeys]}
      showDivider={showDivider}
      className="w-full px-0"
      itemClasses={itemClasses}
      variant={variant}
      {...props}
    >
      <AccordionItem
        key={item?.label?.toLowerCase()}
        aria-label={ariaLabel}
        startContent={startContent}
        hideIndicator={hideIndicator}
        indicator={indicator}
        title={item.label}
        className='w-full'
        classNames={classNames}
      >
        {children}
      </AccordionItem>
    </Accordion>
  )
}