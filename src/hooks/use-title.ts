import { useEffect } from "react";

export const useTitle = (pageTitle: string) => {
  useEffect(() => {
    const initialDocTitle = document.title;

    return () => {
      document.title = initialDocTitle;
    };
  }, []);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
};
