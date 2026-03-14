// define metadata for the case studies layout
export const metadata = {
  title: {
    template: "Mike Martin Media | Case Studies | %s",
    default: "Mike Martin Media | Case Studies",
  },
  description:
    "",
  metadataBase: new URL("https://www.mikemartinmedia.com/case-studies/study/"),
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}