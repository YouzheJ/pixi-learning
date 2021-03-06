module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        _: true,
        Axios: true,
        Utils: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'indent': ['error', 4],
        'no-unused-vars': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'vue/no-unused-components': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
