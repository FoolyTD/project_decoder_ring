// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("is a function", () => {
        expect(typeof(substitution)).to.eql("function");
    });

    it("returns a string", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(typeof(actual)).to.be.string;
    });

    it("includes spaces and special characters", () => {
        const actual = substitution("You are an excellent spy!", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne!'
        expect(actual).to.eql(expected);
    });

    it("ignores capital letters", () => {
        const actual = substitution("You are an excellent spy!", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne!'
        expect(actual).to.eql(expected);
    });

    it("returns false if substitute alphabet is not exactly 26 characters", () => {
        const actual = substitution("You are an excellent spy!", "xoyqmcgrukswaflnthdjpzibe");
        expect(actual).to.be.false;
    });

    it("correctly translates message", () => {
        const actual = substitution("You are an excellent spy!", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne!'
        expect(actual).to.eql(expected);
    });

    it("returns false if substitute alphabet does not have unique characters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });

    it("returns the correct decoded message when", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message"
        expect(actual).to.equal(expected);
    });
})