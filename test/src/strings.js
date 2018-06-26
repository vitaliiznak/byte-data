/*!
 * Copyright (c) 2017 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

let assert = require('assert');
let byteData = require('../../test/loader.js');

describe('pack strings', function() {
    it('should turn a string to a byte array', function() {
        assert.deepEqual(
            byteData.packString("abcd"), [97,98,99,100]);
    });

    it('should pack a string to a buffer', function() {
        let buffer = new Uint8Array(12);
        byteData.packStringTo("abcd", buffer, 4);
        assert.deepEqual(
            buffer, [0, 0, 0, 0, 97,98,99,100, 0, 0, 0, 0]);
    });
});

describe('unpack strings', function() {
    it('unpack string, no index, no len', function() {
        assert.deepEqual(
            byteData.unpackString(new Uint8Array([97,98,99,100])), "abcd");
    });
    it('unpack string, index, no len', function() {
        assert.deepEqual(
            byteData.unpackString(new Uint8Array([97,98,99,100]), 1), "bcd");
    });
    it('unpack string, index, no len', function() {
        assert.deepEqual(
            byteData.unpackString(new Uint8Array([97,98,99,100]), 2), "cd");
    });
    it('unpack string, index, len', function() {
        assert.deepEqual(
            byteData.unpackString(new Uint8Array([97,98,99,100]), 1, 2), "bc");
    });
});