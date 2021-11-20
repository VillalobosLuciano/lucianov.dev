import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
  createPortableTextComponent,
} from "next-sanity";
import { sanityConfig } from "./config";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import Pre from "../components/Pre";
import { useTheme } from "next-themes";

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
        const { theme: currentTheme } = useTheme();
        const { language, code } = node;
        if (!code) {
          return null;
        }
        return (
          <Pre>
            <SyntaxHighlighter
              language={language || ""}
              // TODO: Add custom light theme
              style={currentTheme == "light" ? a11yLight : a11yDark}
            >
              {code}
            </SyntaxHighlighter>
          </Pre>
        );
      },
    },
  },
});
