export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      secondary: "slate",
      success: "green",
      warning: "yellow",
      error: "red",
    },
    icons: {
      copy: "i-lucide-copy",
      copyCheck: "i-lucide-copy-check",
      close: "i-lucide-x",
      menu: "i-lucide-menu",
    },
  },

  uiPro: {
    prose: {
      codeIcon: {
        terminal: "i-lucide-terminal",
        javascript: "i-lucide-file-text",
        typescript: "i-lucide-file-text",
        vue: "i-lucide-file-text",
      },
    },
  },
});
