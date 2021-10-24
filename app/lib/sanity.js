import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
  createPortableTextComponent,
} from "next-sanity";
import { sanityConfig } from "./config";
import SyntaxHighlighter from "react-syntax-highlighter";
import { qtcreatorDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Pre from "../components/Pre";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

export const PortableText = createPortableTextComponent({
  ...sanityConfig,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: {
      container: ({ children }) => children,
      code: ({ node = {} }) => {
        const { language, code } = node;
        if (!code) {
          return null;
        }
        return (
          <Pre>
            <SyntaxHighlighter language={language || ""} style={qtcreatorDark}>
              {code}
            </SyntaxHighlighter>
          </Pre>
        );
      },
    },
  },
});
