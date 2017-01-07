var postcss = require('postcss');
var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

/* Write tests here */

it('expands overflow:ellipsis', () => {
    return run(
    	'a {overflow: ellipsis;}',
    	'a {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}',
    	{}
	);
});
