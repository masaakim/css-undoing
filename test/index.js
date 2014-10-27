var test = require('colored-tape')
var undoing = require('..')

var css = ".header{font-size: 24px;margin-bottom:10px;}.header{margin-bottom:0;}"

test('description', function (t) {
    t.equal(false, undoing.check(css))
    t.end()
})
