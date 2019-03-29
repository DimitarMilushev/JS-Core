const assert = require("chai").assert;
const isOddOrEven = require("../EvenOrOdd");

describe("isOddOrEven", function() {
    
    it("should return undefined if input is not of type string", function() {

        //Arrange
        let input = 5;

        //Act
        let result = isOddOrEven(input);

        //Assert
        assert.equal(result, undefined);
    });

    it("should return undefined if input is parameters", function() {

        //Arrange
        let input = [5, "asd"];

        //Act
        let result = isOddOrEven(input);

        //Assert
        assert.equal(result, undefined);
    });

    it("should return even if input length is an even number", function() {

        //Arrange
        let input = "Halo"

        //Act
        let result = isOddOrEven(input);

        //Assert
        assert.equal(result, "even");
    });

    it("should return odd if input length is an odd number ", function() {

        //Arrange
        let input = "Hello"

        //Act
        let result = isOddOrEven(input);

        //Assert
        assert.equal(result, "odd");
    });
})