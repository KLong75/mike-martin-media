// define metadata for the blog posts layout
export const metadata = {
  title: {
    template: "Blog | Mike Martin Media | %s",
    default: "Blog | Mike Martin Media",
  },
  description:
    "",
  metadataBase: new URL("https://www.mikemartinmedia.com/blog/posts/"),
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