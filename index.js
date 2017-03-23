var postcss = require('postcss');

/**
 * Very important postscss plugin
 * @type {Plugin}
 */
module.exports = postcss.plugin('postcss-v-important', function (opts) {
    opts = opts || {};

    return function (css, result) {
        css.walkRules(function (rule) {
            var ruleParent = rule.parent;
            rule.walkDecls(function (decl, i) {

                var matches = decl.value.match(/(.*?)!([v]+)important/);

                let importance = null;

                if (matches !== null && matches.length > 2 && typeof matches[2] !== "undefined") {

                    importance = matches[2].length;
                    var selector = '' + ':root'.repeat(importance) + ' ' + rule.selector  ;
                    var newRule = postcss.rule({selector: selector});
                    var newDeclaration = postcss.decl({prop: decl.prop, value: matches[1] + '!important'});

                    decl.remove();
                    newRule.append(newDeclaration);
                    ruleParent.insertAfter(rule, newRule);

                    if (rule.nodes.length === 0) {
                        rule.remove();
                    }
                }

            });

        });

    };
});
