module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/forbid-prop-types": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-param-reassign": ["error", { "props": false }],
  },
  "env": {
    "browser": true,
    "jest": true,
  },
};
