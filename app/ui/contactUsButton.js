import Link from "next/link";

export default function ContactUsButton() {
  return (
    <button
      className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
      type="button">
      <Link href="/page4">Contact Us</Link>
    </button>
  );
}
