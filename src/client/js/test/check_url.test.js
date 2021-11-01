import {check_url} from "../check_url"


describe('check_url test', () => {
    test("Testing for check_url function", () => {
        // check if function returns a valid url
        expect(check_url('https://www.google.com')).toBeTruthy();
        expect(check_url('http://www.google.com')).toBeTruthy();
        expect(check_url('http://www.google.net')).toBeTruthy();
        expect(check_url('http://www.google.org')).toBeTruthy();
    });
});