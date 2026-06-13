import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "CLAUDE.md",
    "AGENTS.md",
  ]),

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side-effect imports first (e.g. CSS, polyfills)
            ["^\\u0000"],
            // React / Next.js core
            ["^react$", "^react-dom$", "^next(/.*|$)"],
            // External packages
            ["^@?\\w"],
            // Internal aliases (@/...)
            ["^@/"],
            // Relative imports — parent first, then siblings
            ["^\\.\\./", "^\\./"],
            // Type-only imports last
            ["^.*\\u0000$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "no-duplicate-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "react/self-closing-comp": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      "no-console": "warn",
      "no-nested-ternary": "error",
    },
  },
]);
