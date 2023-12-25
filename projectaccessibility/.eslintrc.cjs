module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "standard",
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    ignorePatterns: [
        "dist",
        ".eslintrc.cjs",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: [
        "react",
    ],
    rules: {
        "react/react-in-jsx-scope":
            "off",
        "react/prop-types":
            "off",
        semi: [
            "error",
            "always",
        ],
        quotes: [
            "error",
            "double",
        ],
        indent: [
            "error",
            4,
        ],
    },
};