import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { FontaineTransform } from "fontaine";

const options = {
  // You can specify fallbacks as an array (applies to all fonts)
  fallbacks: [
    "Lato",
    "Ubuntu",
    "Poppins",
    "Quicksand",
    "Montserrat",
    "Open Sans",
    "Playwrite PL",
  ],

  // Or as an object to configure specific fallbacks per font family
  // fallbacks: {
  //   Poppins: ['Helvetica Neue'],
  //   'JetBrains Mono': ['Courier New']
  // },

  // You may need to resolve assets like `/fonts/Roboto.woff2` to a particular directory
  resolvePath: (id) => `file:///path/to/public/dir${id}`,
  // fallbackName: (originalName) => `${name} fallback`
  // sourcemap: false
  // skipFontFaceGeneration: (fallbackName) => fallbackName === 'Roboto fallback'
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      verbose: true,
      disable: false,
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    FontaineTransform.vite(options),
  ],
});
