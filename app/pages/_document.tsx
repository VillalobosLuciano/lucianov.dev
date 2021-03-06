import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased text-gray-400 bg-bgLight dark:bg-bgDark dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
