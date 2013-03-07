// TODO: Build global mocks for the Titanium API!

var Ext = require('../../app/lib/extanium-debug');

describe("Ext", function () {

    it("should check if Ext is globally available", function () {
        expect(Ext).toBeDefined();
    });
});