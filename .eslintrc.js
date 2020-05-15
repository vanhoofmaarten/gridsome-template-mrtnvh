module.exports = {
  parser: "vue-eslint-parser",
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:vue/vue3-recommended",
    "plugin:gridsome/recommended",
    "prettier/vue",
  ],
  plugins: ["prettier"],
  rules: {
    "vue/component-tags-order": [
      "error",
      { order: ["template", "script", "style"] },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["~", "./src"]],
        extensions: [".ts", ".js", ".jsx", ".json", ".vue"],
      },
    },
  },
};
