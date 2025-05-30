import React, { forwardRef } from "react";
import Link from "next/link";

const VALID_LINK_PROPS = [
  "href",
  "as",
  "replace",
  "scroll",
  "shallow",
  "passHref",
  "prefetch",
  "locale",
  "legacyBehavior",
];

const eventFilter = /^on[A-Z]/;

const NextLink = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    legacyBehavior?: boolean;
  }
>(({ href, children, className, ...props }, ref) => {
  const linkProps: Record<string, unknown> = {};
  const anchorProps: Record<string, unknown> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (VALID_LINK_PROPS.includes(key) || eventFilter.test(key)) {
      linkProps[key] = value;
    } else {
      anchorProps[key] = value;
    }
  });

  return (
    <Link href={href} ref={ref} className={className} {...linkProps}>
      {children}
    </Link>
  );
});

NextLink.displayName = "NextLink";

export default NextLink;
