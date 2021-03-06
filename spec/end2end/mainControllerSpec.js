
var webdriver = require('selenium-webdriver');

var homepage = {
    pageHeading :  element(By.id('#welcome-message')) ,
    get : function () {
        browser.get('index.html');
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(500);
    }

};

// describe('main controller', function () {
//     it('should display   welcome message'+homepage.pageHeading.getText() , function () {
//         homepage.get();
//         expect(homepage.pageHeading.getText()).toContain('hello word');
//     })
// });

describe("application", function() {
    it("should set the title", function() {
        browser.get("#/").then(function() {
            return browser.getTitle();
        }).then(function(title) {
            var EC = protractor.ExpectedConditions;
               browser.wait(EC.presenceOf(element(by.id('pizza'))), 2000);
            var list = element(by.id('pizza'));
            expect(list.getText()).toBe('Order a pizza');
            expect(title).toEqual("Welcome");
        });
    });
});

describe("test select", function() {
    it("submit test", function() {
        browser.get("#/").then(function() {
            return browser.getTitle();
        }).then(function(title) {

            var EC = protractor.ExpectedConditions;
            browser.wait(EC.presenceOf(element(by.id('pizza'))), 2000);
            var options  =  element.all(by.tagName('option'));
            options.get(2).click();
            var btn   =  element(by.buttonText('Place Order')) ;
            var nbre   =  element(by.model('numbre')).sendKeys('10') ;
            btn.click();
            expect(browser.getLocationAbsUrl()).toBe('/checkout');
            // browser.sleep('6000');
        });
    });
});


