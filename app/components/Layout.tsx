import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Meta /> */}
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
