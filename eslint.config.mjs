import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    rules: {
      "@typescript-eslint/type-annotation-spacing": [
        "error",
        {
          before: false,
          after: true
        }
      ],
      semi: "error",
      "comma-dangle": "error"
    }
  }
);
