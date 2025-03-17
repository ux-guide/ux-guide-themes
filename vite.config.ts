import path from "path";
import packageJson from "./package.json";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dtsBundleGenerator from "vite-plugin-dts-bundle-generator";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, char => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileName = {
  es: "index.js",
  cjs: "index.cjs",
  umd: "index.umd.js",
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineConfig(({ command }) => ({
  base: "./",
  plugins: [
    react(),
    dtsBundleGenerator({
      fileName: "index.d.ts",
    }),
  ],
  build: {
    minify: false,
    outDir: "./build",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: getPackageNameCamelCase(),
      formats,
      fileName: format => (fileName as any)[format],
    },
  },
  test: {
    watch: false,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@@", replacement: path.resolve(__dirname) },
    ],
  },
  // Only applies during development
  server: command === "serve" && {
    open: ".",
  },
}));
