module.exports = {
  "extends": ["airbnb"],
  "plugins": ["react","jsx-a11y","import"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true
  },
  "rules": {
    "linebreak-style": [
      "off",
      "unix"
    ],
    "comma-dangle": ["error"],
    "jsx-a11y/label-has-for":"off",
    "jsx-a11y/href-no-hash": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
}
