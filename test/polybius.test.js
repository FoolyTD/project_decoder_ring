// Write your tests here!
const {expect} = require('chai');
const polybius = require('../src/polybius');

describe("polybius", () => {
    it("should return a string", () => {
        const actual = polybius("");
        const expected = "";

        expect(actual).to.equal(expected);
    });

    it("if decoding, should return false if characters not even", () => {
        const actual = polybius('123 3456', false);
        
        expect(actual).to.be.false;
    });

    it("should maintain proper spacing for decoding", () => {
        const actual = polybius('311144 321144', false);
        const expected = 7;

        expect(actual.length).to.equal(expected);
    });

    it("i and j share a value key of 42 and both are shown", () => {
        const actual = polybius('4252', false);
        const expected = '(i/j)k';

        expect(actual).to.equal(expected);
    });

    it("encoding ignores capital letters", () => {
        const actual = polybius('Cat');
        const expected = '311144'

        expect(actual).to.equal(expected);
    })

    it("encoding maintains proper spacing", () => {
        const actual = polybius('Cat hat');
        const expected = '311144 321144'

        expect(actual).to.equal(expected);
    })

} )