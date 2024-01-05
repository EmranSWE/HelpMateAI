import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      This is LandingPage (Unprotected routes)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default LandingPage;
