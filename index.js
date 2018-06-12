/*
 * byte-data
 * Pack and unpack binary data.
 * Copyright (c) 2017-2018 Rafael da Silva Rocha.
 * https://github.com/rochars/byte-data
 *
 */

/**
 * @type {!Object}
 * @private
 */
const packer = require("./lib/packer");

/**
 * Write a number or fixed-length string to a byte buffer.
 * @param {number|string} value The value.
 * @param {!Object} theType The type definition.
 * @return {!Array<number|string>}
 * @throws {Error} If the type definition is not valid.
 */
function pack(value, theType) {
    packer.setUp(theType);
    let packed = [];
    if (value === undefined) {
        return packed;
    }
    value = packer.fixBadString(value, theType);
    return packer.toBytes([value], theType);
}

/**
 * Read a number or a fixed-length string from a byte buffer.
 * @param {!Array<number|string>|!Uint8Array} buffer An array of bytes.
 * @param {!Object} theType The type definition.
 * @return {number|string|null}
 * @throws {Error} If the type definition is not valid.
 */
function unpack(buffer, theType) {
    packer.setUp(theType);
    let values = packer.fromBytes(
        buffer.slice(0, theType["offset"]), theType);
    return values ? values[0] : theType["char"] ? "" : null;
}

/**
 * Write an array of numbers or a string to a byte buffer.
 * @param {!Array<number|string>} values The values.
 * @param {!Object} theType The type definition.
 * @return {!Array<number|string>}
 * @throws {Error} If the type definition is not valid.
 */
function packArray(values, theType) {
    packer.setUp(theType);
    // Fix strings with bad length in the array
    if (theType["char"]) {
        let len = values.length;
        for (let i=0; i<len; i++) {
            values[i] = packer.fixBadString(values[i], theType);
        }
    }
    return packer.toBytes(values, theType);
}

/**
 * Read an array of numbers or a string from a byte buffer.
 * @param {!Array<number|string>|!Uint8Array} buffer The byte array.
 * @param {!Object} theType The type definition.
 * @return {!Array<number|string>|number}
 * @throws {Error} If the type definition is not valid.
 */
function unpackArray(buffer, theType) {
    packer.setUp(theType);
    return packer.fromBytes(buffer, theType);
}

// Methods
module.exports.pack = pack;
module.exports.unpack = unpack;
module.exports.packArray = packArray;
module.exports.unpackArray = unpackArray;
module.exports.types = require("./lib/types");
