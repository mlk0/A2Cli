"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MyAnglePage = (function () {
    function MyAnglePage() {
    }
    MyAnglePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MyAnglePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return MyAnglePage;
}());
exports.MyAnglePage = MyAnglePage;
//# sourceMappingURL=app.po.js.map