import { createContext } from "react";
import useSWR from "swr";

export const ThemeContext = createContext("light ");

const url = "https://dev.to/api/articles";

export const ThemeContextProvider = ({ children }) => {
  const { data, error, isLoading } = useSWR(url);

  if (isLoading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
