
var assert = require('assert');

describe('crumbs to bytes', function() {   
    let byteData = require('../../index.js');

    // 2-bit
    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([0]),
            [0]);
    });
    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([1]),
            [1]);
    });
    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([2]),
            [2]);
    });
    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([3]),
            [3]);
    });

    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([0], 2),
            ['00']);
    });
    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([1], 2),
            ['01']);
    });
    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([2], 2),
            ['10']);
    });
    it('should turn 2 2-bit unsigned int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([3], 2),
            ['11']);
    });

    it('should turn 2 2-bit signed int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([-2], 2),
            ['10']);
    });
    it('should turn 2 2-bit signed int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([-1], 2),
            ['11']);
    });
    it('should turn 2 2-bit signed int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([0], 2),
            ['00']);
    });
    it('should turn 2 2-bit signed int to 2 crumb (0s)', function() {
        assert.deepEqual(byteData.toCrumb([1], 2),
            ['01']);
    });

    it('should turn 2 2-bit signed int to 2 bytes (-2)', function() {
        assert.deepEqual(byteData.toCrumb([-2]),
            [2]);
    });
    it('should turn 1 2-bit signed int to 1 crumb (-1)', function() {
        assert.deepEqual(byteData.toCrumb([-1]),
            [3]);
    });
    it('should turn 1 2-bit signed int to 1 crumb hex (-1)', function() {
        assert.deepEqual(byteData.toCrumb([-1], 16),
            ['03']);
    });
    it('should turn 1 2-bit unsigned int to 1 crumb hex (2)', function() {
        assert.deepEqual(byteData.toCrumb([2], 16),
            ['02']);
    });
    it('should turn 1 2-bit unsigned int to 1 crumb bin (1)', function() {
        assert.deepEqual(byteData.toCrumb([1], 2),
            ['01']);
    });
});
