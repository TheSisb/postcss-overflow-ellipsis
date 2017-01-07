var postcss = require('postcss');

module.exports = postcss.plugin('postcss-overflow-ellipsis', () => {
    const propertyMatch = /^overflow$/;

    return function (css) {
        css.walkDecls(propertyMatch, decl => {
            if (decl.value !== 'ellipsis') return;

            decl.cloneBefore({
                prop: 'white-space',
                value: 'nowrap'
            });
            decl.cloneBefore({
                prop: 'text-overflow',
                value: 'ellipsis'
            });

            decl.value = 'hidden';
        });
    };
});
