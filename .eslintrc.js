module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential"],
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)"],
            env: {
                jest: true,
                webextensions: true
            }
        }
    ]
};
