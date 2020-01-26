/*
 * Copyright (c) 2017-2019 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview Externs for byte-data 18.1
 * @see https://github.com/rochars/byte-data
 * @externs
 */

/** @type {!Object} */
var byteData = {};

/**
 * Read a string of UTF-8 characters from a byte buffer.
 * @param {!Uint8Array|!Array<number>} buffer A byte buffer.
 * @param {number=} index The buffer index to start reading.
 * @param {number=} end The buffer index to stop reading, non inclusive.
 *   Assumes buffer length if undefined.
 * @return {string}
 */
byteData.unpackString = function(buffer, index=0, end=buffer.length) {};

/**
 * Write a string of UTF-8 characters as a byte buffer.
 * @param {string} str The string to pack.
 * @return {!Array<number>} The UTF-8 string bytes.
 */ 
byteData.packString = function(str) {};

/**
 * Write a string of UTF-8 characters to a byte buffer.
 * @param {string} str The string to pack.
 * @param {!Uint8Array|!Array<number>} buffer The output buffer.
 * @param {number=} index The buffer index to start writing.
 *   Assumes zero if undefined.
 * @return {number} The next index to write in the buffer.
 */
byteData.packStringTo = function(str, buffer, index=0) {};

// Numbers
/**
 * Pack a number as a byte buffer.
 * @param {number} value The number.
 * @param {!{bits:number, fp: boolean, signed: boolean, be: boolean}} theType
    The type definition.
 * @param {boolean=} clamp True to clamp ints on overflow. Default is false.
 * @return {!Array<number>} The packed value.
 * @throws {Error} If the type definition is not valid.
 * @throws {RangeError} On overflow.
 * @throws {TypeError} If input is not valid.
 */
byteData.pack = function(value, theType, clamp=false) {};

/**
 * Pack a number to a byte buffer.
 * @param {number} value The value.
 * @param { {bits:number, fp: boolean, signed: boolean, be: boolean} } theType
    The type definition.
 * @param {!Uint8Array|!Array<number>} buffer The output buffer.
 * @param {number=} index The buffer index to write. Assumes 0 if undefined.
 * @param {boolean=} clamp True to clamp ints on overflow. Default is false.
 * @return {number} The next index to write.
 * @throws {Error} If the type definition is not valid.
 * @throws {RangeError} On overflow.
 * @throws {TypeError} If input is not valid.
 */
byteData.packTo = function(value, theType, buffer, index=0, clamp=false) {};

/**
 * Pack an array of numbers as a byte buffer.
 * @param {!Array<number>|!TypedArray} values The values.
 * @param {!{bits:number, fp: boolean, signed: boolean, be: boolean}} theType
    The type definition.
 * @param {boolean=} clamp True to clamp ints on overflow. Default is false.
 * @return {!Array<number>} The packed values.
 * @throws {Error} If the type definition is not valid.
 * @throws {RangeError} On overflow.
 * @throws {TypeError} If input is not valid.
 */
byteData.packArray = function(values, theType, clamp=false) {};

/**
 * Pack a array of numbers to a byte buffer.
 * All other packing functions are interfaces to this function.
 * @param {!Array<number>|!TypedArray} values The value.
 * @param { {bits:number, fp: boolean, signed: boolean, be: boolean} } theType
    The type definition.
 * @param {!Uint8Array|!Array<number>} buffer The output buffer.
 * @param {number=} index The buffer index to start writing.
 *   Assumes zero if undefined.
 * @param {boolean=} clamp True to clamp ints on overflow. Default is false.
 * @return {number} The next index to write.
 * @throws {Error} If the type definition is not valid.
 * @throws {RangeError} On overflow.
 * @throws {TypeError} If input is not valid.
 */
byteData.packArrayTo = function(values, theType, buffer, index=0,
	clamp=false) {};

/**
 * Unpack a number from a byte buffer.
 * @param {!Uint8Array|!Array<number>} buffer The byte buffer.
 * @param {!{bits:number, fp: boolean, signed: boolean, be: boolean}} theType
    The type definition.
 * @param {number=} index The buffer index to read. Assumes zero if undefined.
 * @param {boolean=} clamp True to clamp ints on overflow. Default is false.
 * @return {number}
 * @throws {Error} If the type definition is not valid
 * @throws {Error} On bad buffer length.
 * @throws {RangeError} On overflow
 */
byteData.unpack = function(buffer, theType, index=0, clamp=false) {};

/**
 * Unpack an array of numbers from a byte buffer.
 * @param {!Uint8Array|!Array<number>} buffer The byte buffer.
 * @param {!{bits:number, fp: boolean, signed: boolean, be: boolean}} theType
    The type definition.
 * @param {number=} start The buffer index to start reading.
 *   Assumes zero if undefined.
 * @param {number=} end The buffer index to stop reading.
 *   Assumes the buffer length if undefined.
 * @param {boolean=} safe If set to false, extra bytes in the end of
 *   the array are ignored and input buffers with insufficient bytes will
 *   output a empty array. If safe is set to true the function
 *   will throw a 'Bad buffer length' error. Defaults to false.
 * @param {boolean=} clamp True to clamp ints on overflow. Default is false.
 * @return {!Array<number>}
 * @throws {Error} If the type definition is not valid
 * @throws {RangeError} On overflow
 */
byteData.unpackArray = function(
	buffer, theType, start=0, end=buffer.length, safe=false, clamp=false) {};

/**
 * Unpack a array of numbers to a typed array.
 * All other unpacking functions are interfaces to this function.
 * @param {!Uint8Array|!Array<number>} buffer The byte buffer.
 * @param { {bits:number, fp: boolean, signed: boolean, be: boolean} } theType
    The type definition.
 * @param {!TypedArray|!Array<number>} output The output array.
 * @param {number=} start The buffer index to start reading.
 *   Assumes zero if undefined.
 * @param {number=} end The buffer index to stop reading.
 *   Assumes the buffer length if undefined.
 * @param {boolean=} safe If set to false, extra bytes in the end of
 *   the array are ignored and input buffers with insufficient bytes will
 *   write nothing to the output array. If safe is set to true the function
 *   will throw a 'Bad buffer length' error. Defaults to false.
 * @param {boolean=} clamp True to clamp ints on overflow. Default is false.
 * @throws {Error} If the type definition is not valid
 * @throws {RangeError} On overflow
 */
byteData.unpackArrayTo = function(
	buffer, theType, output, start=0, end=buffer.length,
	safe=false, clamp=false) {};
