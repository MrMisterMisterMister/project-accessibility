import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Get the correct .env file based on the environment
const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;
dotenv.config({ path: envFile });

export default defineConfig({
    server: {
        port: 5001
    },
    plugins: [react()]
});
