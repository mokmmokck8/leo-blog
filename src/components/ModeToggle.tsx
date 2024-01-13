import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export enum Theme {
    'DARK' = 'dark',
    'LIGHT' = 'theme-light',
    'SYSTEM' = 'system',
}

export const ModeToggle = () => {
    const [theme, setThemeState] = useState<Theme>(Theme.LIGHT)

    const handleClick = () => {
        console.log(theme, 'hihi')
        setThemeState(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains(Theme.DARK)
        setThemeState(isDarkMode ? Theme.DARK : Theme.LIGHT)
    }, [])

    useEffect(() => {
        const isDark =
            theme === Theme.DARK ||
            (theme === Theme.SYSTEM && window.matchMedia('(prefers-color-scheme: dark)').matches)
        document.documentElement.classList[isDark ? 'add' : 'remove'](Theme.DARK)
    }, [theme])

    return (
        <Button onClick={handleClick} variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
