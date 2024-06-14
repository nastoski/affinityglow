const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./resources/fieldsets/**/*.{js,html,antlers.html}", "./resources/views/**/*.{js,html,antlers.html}", "./resources/static-templates/**/*.{js,html,antlers.html}", "./resources/js/**/*.js"],
  theme: {
    // defining project colors
    colors: {
      transparent: "transparent",
      black: {
        DEFAULT: "#000000",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      primary: {
        DEFAULT: "#FF4C60",
      },
      secondary: {
        DEFAULT: "#454360", // titles color
        complementary: "#4B4870",
        light: "#596172", // text color
      },
      tertiary: {
        DEFAULT: "#65EBE7", // decorations and main effect
      },
      error: "#964242",
      success: "#505D57",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        josefin: ["Josefin Sans", ...defaultTheme.fontFamily.serif],
        source: ["Source Serif 4", "serif"],
      },
      screens: {
        xs: "550px",
        xxs: "401px",
        ...defaultTheme.screens,
        "1.5lg": "1030px",
        "2lg": "1225px",
        "3xl": "1920px",
      },
      fontSize: {
        "2.5xl": ["1.75rem"], // 28px
        "3xl": ["2.125rem"], // 34px
        "5xl": ["2.5rem"], // 40px
      },
      borderRadius: {
        lg: ".625rem", // 10px
        "4xl": "36px",
        "5xl": "65px",
      },
      maxWidth: {
        "5.5xl": "58.375rem", // 934px
        "8xl": "84rem", // 1344px
      },
      boxShadow: {
        odd: "5px 5px 35px rgba(0, 0, 0, 0.07)",
        alt: "2px 2px 4px rgba(0, 0, 0, 0.16)",
      },
      // setup the CMS styles
      typography: theme => ({
        DEFAULT: {
          css: [
            {
              "--tw-prose-headings": theme("colors.secondary.DEFAULT"),
              color: theme("colors.secondary.DEFAULT"),
              "font-size": "1.125rem", // 18px
              "line-height": "1.666",
              "max-width": "none",
              h1: {
                "font-size": "1.75rem", // 28px
                "line-height": "1.14",
                "margin-bottom": "1.25rem", // 20px
                "font-family": "Josefin Sans, sans-serif",
                "font-weight": "600",
              },
              h2: {
                "font-size": "1.5rem", // 24px
                "line-height": "1.333",
                "margin-bottom": "1.25rem", // 20px
                "margin-top": 0,
                "font-family": "Josefin Sans, sans-serif",
                "font-weight": "600",
              },
              h3: {
                "font-size": "1.375rem", // 22px
                "line-height": "1.333",
                "margin-bottom": "1rem", // 16px
                "font-family": "Josefin Sans, sans-serif",
                "font-weight": "400",
              },
              p: {
                fontFamily: theme("fontFamily.source"),
                "font-weight": "400",
                color: theme("colors.secondary.light"),
                letterSpacing: "0.6px",
              },
              strong: {
                color: theme("colors.secondary.DEFAULT"),
              },
              ul: {
                "list-style-type": "none",
                "padding-left": "0",
                "margin-bottom": "1.25em",
                "font-family": "Source Serif 4, serif",
              },
              "ul > li": {
                "line-height": "1.75em",
                "padding-left": "calc(8px + 15px)",
                position: "relative",
              },
              "ul > li::before": {
                content: '""',
                "background-color": theme("colors.tertiary.DEFAULT"),
                position: "absolute",
                left: "0",
                width: "8px",
                height: "8px",
                top: "calc(-0.2em + (1.75em / 2))",
                "border-radius": "50%",
              },
              ol: {
                "list-style-type": "decimal",
                "padding-left": "20px",
                "margin-bottom": "1.25em",
              },
              "ol > li": {
                "padding-left": "8px",
              },
              "ol > li::marker": {
                color: theme("colors.secondary.DEFAULT"),
              },
              "ul > li::marker": {
                color: theme("colors.secondary.DEFAULT"),
              },
              "ul > li p": {
                "margin-top": "0 !important",
                "margin-bottom": "0 !important",
              },
              "ol > li p": {
                "margin-top": "0 !important",
                "margin-bottom": "0 !important",
              },
              a: {
                color: theme("colors.secondary.DEFAULT"),
                fontFamily: theme("fontFamily.source"),
                "font-weight": "400",
                transition: "color .3s ease-out",
                "text-decoration": "underline",
                "&:hover": {
                  color: theme("colors.tertiary.DEFAULT"),
                },
              },
              blockquote: {
                "font-size": "1.5rem", // 24px
                "line-height": "1.333",
                "font-style": "italic",
                color: theme("colors.secondary.DEFAULT"),
                "font-family": "Josefin Sans, sans-serif",
                "font-weight": "300",
                "padding-left": 0,
                "border-left": 0,
              },
              table: {
                "background-color": "inherit",
                "line-height": "1.5",
                "& tr": {
                  border: `1px solid ${theme("colors.secondary.DEFAULT")}`,
                },
                "& th, & td": {
                  border: `1px solid ${theme("colors.secondary.DEFAULT")}`,
                  "letter-spacing": "0.05em",
                  padding: "0.50rem 0.75rem",
                  "font-size": "1rem",
                },
                "& td": {
                  "font-weight": "normal",
                },
              },
            },
          ],
        },
        lg: {
          css: [
            {
              fontSize: "1.25rem", // 20px
              lineHeight: "1.3",
              h1: {
                "font-size": "2.125rem", // 34px
                "line-height": "1.14",
                "margin-bottom": "1.25rem", // 20px
              },
              h2: {
                "font-size": "1.75rem", // 28px
                "line-height": "1.333",
                "margin-bottom": "1.25rem", // 20px
                "margin-top": 0,
              },
              h3: {
                "font-size": "1.5rem", // 24px
                "line-height": "1.333",
                "margin-bottom": "0.625rem",
              },
              blockquote: {
                "font-size": "2.125rem", // 34px
                "line-height": "1.333",
                "padding-left": 0,
              },
              ol: {
                "padding-left": ".75em",
              },
              "ol > li": {
                "padding-left": "15px",
              },
              ul: {
                "padding-left": "0",
                "font-family": "Source Serif 4, serif",
              },
              "ul > li": {
                "padding-left": "calc(8px + 15px)",
              },
              table: {
                "& th, & td": {
                  "font-size": "1.125rem",
                  "line-height": "1.75rem",
                },
              },
            },
          ],
        },
      }),
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInFromTop: {
          from: {
            opacity: "0",
            "-webkit-transform": "translate3d(0, -100%, 0)",
            transform: "translate3d(0, -100%, 0)",
          },
          "50%": {
            opacity: "1",
          },
          to: {
            opacity: "1",
            "-webkit-transform": "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translate3d(0, 35%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeOutDown: {
          from: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
          to: {
            opacity: "0",
            transform: "translate3d(0, 35%, 0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn .3s ease-out",
        fadeInRight: "fadeInRight .3s ease-out both",
        fadeInFromTop: "fadeInFromTop .3s ease-out forwards",
        fadeInUp: "fadeInUp .35s ease-out both",
        fadeOutDown: "fadeOutDown .35s ease-out both",
      },
    },
  },
  blocklist: ["container"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
