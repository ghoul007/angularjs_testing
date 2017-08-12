 * test
 
 grunt karma:unit
 
 * install Server
 ***
 npm install --save-dev protractor webdriver-manager angular-dev-server
 
 node node_modules\webdriver-manager\bin\webdriver-manager update --standalone
 
 
 node node_modules\webdriver-manager\bin\webdriver-manager start
 
 
 node node_modules\protractor\bin\protractor protractor.conf.js