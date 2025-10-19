export const metadata = {
  title: {
    template: "Our Work | Mike Martin Media | %s",
    default: "Our Work | Mike Martin Media",
  },
  description:
    "",
  metadataBase: new URL("https://www.mikemartinmedia.com/our-work/examples/"),
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