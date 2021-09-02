var assert = require('assert');
const sum = require('../index.js');
// console.log(sum(1, 2));

function teste() {
    assert.ok(sum(1, 2) == 3, 'ok');
    console.log('passou xD');
}

teste();