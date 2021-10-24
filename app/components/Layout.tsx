import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Nav from "./Nav";

export default function Layout({ preview, children }) {
  return (
    <>
      {/* <Meta /> */}
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
