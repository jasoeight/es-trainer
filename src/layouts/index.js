import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// Globally register all layout components, because they will be used very frequently.
const requireComponent = require.context('.', false, /[\w-]+\.vue$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')));
    Vue.component(`Layout${componentName}`, componentConfig.default || componentConfig);
});
