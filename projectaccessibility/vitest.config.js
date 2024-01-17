import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        files: "test/**/*.spec.{js,jsx,ts,tsx}",
        coverage: {
            exclude: [
                "test/**/*.spec.{js,jsx,ts,tsx}",
                "node_modules"
            ]
        },
        reporters: ["default"]
    }
});
