import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
}

const SITE_NAME = "Shourya Parashar";

const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    // Title — "About | Shourya Parashar" or just "Shourya Parashar" on home
    document.title = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;

    // Meta description
    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    // OG title
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", document.title);

    // OG description
    if (description) {
      let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);
    }

    // Restore on unmount to the default
    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description]);
};

export default usePageMeta;
