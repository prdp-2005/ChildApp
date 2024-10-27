import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "dark": '#0E121B',
        "content": '#1DF2F2',
        "medium": '#293245',
        'custom-gray': '#E6E6E7',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'teal': '0 4px 10px rgba(20, 184, 166, 0.5)',
        'custom': '34.854px 29.626px 48.34px rgba(51, 102, 255, 0.05)',
        'shadow': '34.854px 29.626px 48.34px 0px rgba(51, 102, 255, 0.05)'
      },
      borderWidth: {
        'custom-stroke': 'var(--sds-size-stroke-border)',
      },
    },
  },
  plugins: [],
};
export default config;
