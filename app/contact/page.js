// import components
import ContactForm from "../ui/contactForm";
import ContactInfo from "../ui/contactInfo";

export const metadata = {
  title: 'Page 4',
}

export default function Page() {
  return (
    <main className=' flex-1'>
      <h2 className="text-center mt-2">Contact</h2>
      <div className="flex justify-center items-center mt-4">
        <ContactInfo />
      </div>
      <div className="flex justify-center items-center">
        <ContactForm />
      </div>
    </main>
  );
}