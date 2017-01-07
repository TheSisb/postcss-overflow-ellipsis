var postcss = require('postcss');

module.exports = postcss.plugin('postcss-overflow-ellipsis', () => {
    const propertyMatch = /^overflow$/;

    return function (css) {
        css.walkDecls(propertyMatch, decl => {
            decl.cloneBefore({
                prop: 'white-space',
                value: 'nowrap'
            });
            decl.cloneBefore({
                prop: 'overflow',
                value: 'hidden'
            });
            decl.cloneBefore({
                prop: 'text-overflow',
                value: 'ellipsis'
            });

            decl.remove();
        });
    };
});
