import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
