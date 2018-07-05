module.exports = {
    "root": true,
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "jquery": false,
        "jest": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",        // 是否可用console对象
        "no-undef": "off",          // 是否可用未定义的变量
        "no-unused-vars":"off",     // 已声明的变量未被使用
      
        "no-var": "warn",             // 不允许使用 var 定义变量
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],     // 禁止空格和 tab 的混合缩进
        "space-before-function-paren": ["error", "always"]
    }
};
