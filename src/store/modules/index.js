import camelCase from 'lodash/camelCase';

const requireModule = require.context('.', true, /\.js$/);
const root = { modules: {} };

requireModule.keys().forEach(fileName => {
    if (fileName === './index.js' || /\.unit\.js$/.test(fileName)) return;

    const modulePath = fileName
        .replace(/^\.\/|\.js$/g, '')
        .split(/\//)
        .map(camelCase);

    const { modules } = getNamespace(root, modulePath);

    modules[modulePath.pop()] = {
        namespaced: true,
        ...requireModule(fileName)
    };

    function getNamespace(subtree, path) {
        if (path.length === 1) return subtree;

        const namespace = path.shift();
        subtree.modules[namespace] = {
            modules: {},
            ...subtree.modules[namespace]
        };
        return getNamespace(subtree.modules[namespace], path);
    }
});

export default root.modules;
