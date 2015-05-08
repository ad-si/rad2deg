var assert = require('assert'),
    rad2deg = require('../source/index.js')


assert.equal(
    rad2deg(0),
    0
)

assert.equal(
    rad2deg(Math.PI/2),
    90
)

assert.equal(
    rad2deg(Math.PI),
    180
)

assert.equal(
    rad2deg(2 * Math.PI),
    360
)
