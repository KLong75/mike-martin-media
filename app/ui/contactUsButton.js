import Link from "next/link";

export default function ContactUsButton() {
  return (
    <button
      className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full"
      type="button">
      <Link href="/contact">Contact Us</Link>
    </button>
  );
}
