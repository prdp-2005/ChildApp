// "use client";
// import React, { ReactNode, useState, useEffect } from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// interface ThemeProviderProps {
//     children: ReactNode;
// }

// export default function ThemeProvider({ children }: ThemeProviderProps) {
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     if (!isMounted) {
//         return null;
//     }

//     return (
//         <NextThemesProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange={true}
//         >
//             {children}
//         </NextThemesProvider>
//     );
// }

"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// interface ThemeProviderProps {
//     children: ReactNode;
// }

export default function ThemeProvider({ children, ...props }: any) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <NextThemesProvider {...props}
        // disableTransitionOnChange={true}
        >
            {children}
        </NextThemesProvider>
    );
};

