module.exports = {
    "env": {
        "node": true,
        "es6": true,
        browser: true,
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "impliedStrict": true,
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "destructuring": true,
            "classes": true,
            "arrowFunctions":true,
            "modules":true,
        },
        "sourceType": "module"
    },
    parser: "babel-eslint",
    "rules": {
        "indent": [
            2, 2,
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
