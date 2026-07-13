/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        "figma-text-1": "hsl(var(--figma-text-1))",

        "figma-surface": "hsl(var(--figma-surface))",

        "figma-color-11": "hsl(var(--figma-color-11))",

        "figma-color-9": "hsl(var(--figma-color-9))",

        "figma-color-10": "hsl(var(--figma-color-10))",

        "figma-subtle": "hsl(var(--figma-subtle))",

        "figma-highlight": "hsl(var(--figma-highlight))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontSize: {
        "figma-18": "18px",

        "figma-20": "20px",

        "figma-22": "22px",

        "figma-24": "24px",

        "figma-25": "25px",

        "figma-26": "26px",

        "figma-30": "30px",

        "figma-35": "35px",

        "figma-36": "36px",

        "figma-37": "37px",

        "figma-40": "40px",

        "figma-45": "45px",

        "figma-46": "46px",

        "figma-52": "52px",

        "figma-68": "68px",

        "figma-75": "75px",

        "figma-96": "96px",

        "figma-226": "226px",

        "figma-759": "759px",
      },

      fontWeight: {
        "figma-extralight": "200",

        "figma-light": "300",

        "figma-normal": "400",

        "figma-medium": "500",

        "figma-semibold": "600",

        "figma-bold": "700",

        "figma-extrabold": "800",
      },

      lineHeight: {
        "figma-24": "24px",

        "figma-25": "25px",

        "figma-26": "26px",

        "figma-27": "27px",

        "figma-28": "28px",

        "figma-29": "29px",

        "figma-30": "30px",

        "figma-32": "32px",

        "figma-33": "33px",

        "figma-34": "34px",

        "figma-35": "35px",

        "figma-37": "37px",

        "figma-38": "38px",

        "figma-40": "40px",

        "figma-43": "43px",

        "figma-44": "44px",

        "figma-45": "45px",

        "figma-46": "46px",

        "figma-49": "49px",

        "figma-54": "54px",

        "figma-55": "55px",

        "figma-57": "57px",

        "figma-61": "61px",

        "figma-68": "68px",

        "figma-69": "69px",

        "figma-96": "96px",

        "figma-136": "136px",

        "figma-175": "175px",

        "figma-298": "298px",

        "figma-1002": "1002px",
      },

      fontFamily: {
        heading: ["Be Vietnam Pro", "sans-serif"],
        body: ["Inter", "sans-serif"],
        "figma-montserrat": ["Montserrat", "sans-serif"],
        "figma-inter": ["Inter", "sans-serif"],
        "figma-poppins": ["Be Vietnam Pro", "sans-serif"], // Đã đổi
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
