module.exports = {
  "extends": ["airbnb"],
  "plugins": ["prettier","react","jsx-a11y","import"],
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
    "jsx-a11y/href-no-hash": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
