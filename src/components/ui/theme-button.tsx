import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";
import { useState, useEffect } from "react";

export const ThemeButton = () => {
    const [isDark, setIsDark] = useState(false);

    // Verificar el tema inicial al cargar el componente
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        setIsDark(shouldBeDark);
        updateTheme(shouldBeDark);
    }, []);

    // Función para actualizar el tema en el DOM
    const updateTheme = (dark: boolean) => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };

    // Función para alternar el tema
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        updateTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <Button
            size="icon"
            variant="outline"
            className="text-gray-900 border-gray-900 dark:text-white dark:border-white transition-all duration-200"
            onClick={toggleTheme}
            aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
        >
            {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </Button>
    );
};