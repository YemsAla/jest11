/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toBe("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
    test("Expects instruction modal", () => {
       expect(document.getElementById("instruction-button")
        .length).toBe(1);
    })
});