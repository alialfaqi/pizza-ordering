import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-4 text-gray-500 font-semibold items-center">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          ST PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <nav className="flex gap-4 text-gray-500 font-semibold items-center">
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary text-white rounded-full px-6 py-2"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
