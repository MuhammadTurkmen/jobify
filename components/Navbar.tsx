import { UserButton } from "@clerk/nextjs";
import LinksDropdown from "./LinksDropdown";
import { ThemeToggle } from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between lg:justify-end">
      <LinksDropdown />
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}

export default Navbar;
