// "use client";

// import React, { useState, useEffect } from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// // interface ThemeProviderProps {
// //     children: ReactNode;
// // }

// export default function ThemeProvider({ children, ...props }: any) {
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     if (!isMounted) {
//         return null;
//     }

//     return (
//         <NextThemesProvider {...props}
//         // disableTransitionOnChange={true}
//         >
//             {children}
//         </NextThemesProvider>
//     );
// };

"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    );
};

export default ThemeProvider;
