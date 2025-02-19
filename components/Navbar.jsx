import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto max-w-screen-lg w-4/5 mt-2 font-[family-name:var(--font-geist-sans)]">
      <header className="relative flex h-16 items-center justify-center">
        <Link href="/" className="flex absolute left-0 space-x-2">
          <span className="text-2xl tracking-widest uppercase">
            <span className="font-bold">Ben</span>{' '}
            <span className="font-light">Traje</span>
          </span>
        </Link>
        <nav className="absolute right-0">
          <Link
            href="/about"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;