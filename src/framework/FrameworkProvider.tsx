import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import "./framework.css";

type Theme = "light" | "dark";

type FrameworkContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const FrameworkContext = createContext<FrameworkContextValue | null>(null);

type FrameworkProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
};

export function FrameworkProvider({
  children,
  defaultTheme = "light",
}: FrameworkProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return (
    <FrameworkContext.Provider value={value}>
      <div className="fw-root" data-theme={theme}>
        {children}
      </div>
    </FrameworkContext.Provider>
  );
}

export function useFramework() {
  const context = useContext(FrameworkContext);

  if (!context) {
    throw new Error(
      "useFramework muss innerhalb eines FrameworkProvider verwendet werden."
    );
  }

  return context;
}
