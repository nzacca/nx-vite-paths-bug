import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { defineConfig } from "vite";

export default defineConfig({
  root: __dirname,
  plugins: [
    nxViteTsPaths() // Try with { extensions: [".ts", ".js", ".css"] }
  ],
  test: {
		globals: true,
		include: ['**/*.spec.ts'],
	},
})
