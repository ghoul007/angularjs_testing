var homepage = {
    pageHeading : element(webdriver.By.id('welcome-message')),
    get : function () {
        browser.get('index.html');
    }

}