describe('unit 1.8', function() {
    it('should say booyah', function() {
        browser.get('http://localhost:8000');
        var myh3 = element(by.tagName('h3'));
        expect(myh3.getText()).toContain('booyah');
    });

    it('should reverse text', function() {
        browser.get('http://localhost:8000');
        var input = element(by.tagName('input'));
        var button = element(by.css('.reverseButton'));
        var h1 = element(by.tagName('h1'));

        input.sendKeys('hello');
        button.click();

        expect(h1.getText()).toContain('olleh');
    })

})
