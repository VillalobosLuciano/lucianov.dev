import "@/css/tailwind.css";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { hotjar } from "react-hotjar";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2806310, 6);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
