module.exports = {
    plugins: {
      "@fullhuman/postcss-purgecss": {
        content: [
          "./themes/pfTheme/assets/js/*.js",
          "./content/*.md",
          "./themes/pfTheme/layouts/**/*.html",
          "./themes/pfTheme/layouts/*.html",
          "./static/js/*.js",
        ],
        safelist: [        ],
        blocklist: [        ],
      },
    },
  };
  