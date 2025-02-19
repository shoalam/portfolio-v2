import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      className="p-2 rounded-lg w-8 h-8 border border-1 border-gray-500 dark:border-gray-700 flex justify-center items-center absolute left-3 top-3"
      onClick={handleThemeChange}
    >
      {theme === "dark" ? <span>🌞</span> : <span>🌙</span>}
    </button>
  );
};

export default ThemeToggle;
