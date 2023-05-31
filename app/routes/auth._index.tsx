import authStyles from "~/styles/auth.css";
import AuthFrom from "~/components/auth/AuthForm";
import MainHeader from "~/components/navigation/MainHeader";

export default function AuthPage() {
  return (
    <>
      <MainHeader />
      <AuthFrom />
    </>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: authStyles,
    },
  ];
}
