import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lap: { min: '1100px' },
        tab: { max: '1000px' },
        mob: { max: '767px' }
      }
    },
  },
  plugins: [],
} satisfies Config;