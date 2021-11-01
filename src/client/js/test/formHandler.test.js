import "babel-polyfill";
import {handleSubmit} from "../formHandler"


describe('handleSubmit test', () => {
    test("Testing for handleSubmit function", () => {
        expect(handleSubmit()).toBeDefined();
    });
});