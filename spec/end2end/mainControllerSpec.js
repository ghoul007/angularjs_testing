describe('main controller', function () {
    it('should display   welcome message', function () {
        homepage.get();
        expect(homepage.pageHeading.getText()).toEqual('hello word');
    })
});