import { Moon, Sun } from "lucide-react";

import { Switch } from "./ui/switch";
import { useTheme } from "./theme-provider";

export default function ModeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <div className="flex justify-center items-center gap-3">
        {theme === "dark" ? <Moon className="w-5" /> : <Sun className="w-5" />}
        <Switch
          checked={isDark}
          onCheckedChange={(checked: boolean) => {
            setTheme(checked ? "dark" : "light");
          }}
        />
      </div>
    </>
  );
}
