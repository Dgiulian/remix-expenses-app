import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import marketingStyles from "~/styles/marketing.css";

function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default MarketingLayout;

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: marketingStyles,
  },
];
