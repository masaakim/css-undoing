var parse = require('css-parse')

module.exports.check = function (css) {
    var ast = parse(css)
    var ret = 0

    ast.stylesheet.rules.forEach(function visit(rule) {
        if (rule.rules) rule.rules.forEach(visit)

        rule.declarations.forEach(function(declaration) {
            if (declaration.value.match(/^0\D*$|^none$/)) ret++
        })
    })

    return ret ? false : true
}
