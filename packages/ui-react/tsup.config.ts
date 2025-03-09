import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*@(ts|tsx)"],
  format: "esm",
  dts: true,
  external: ["react"],
  ...options,
}));
