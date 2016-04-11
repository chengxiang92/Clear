/**
 *
 * @author
 *
 */
var LevelRequire = (function () {
    function LevelRequire() {
    }
    var d = __define,c=LevelRequire;p=c.prototype;
    p.getRequiredNum = function () {
        return this.levelRequireElementArray.length;
    };
    p.addRequiredElement = function (type, num) {
        var element = new LevelRequireElement();
        element.type = type;
        element.num = num;
        this.levelRequireElementArray.push(element);
    };
    p.changeRequireElement = function (type, num) {
        var length = this.levelRequireElementArray.length;
        for (var i = 0; i < length; i++) {
            if (this.levelRequireElementArray[i].type == type) {
                this.levelRequireElementArray[i].num = num;
                return;
            }
        }
    };
    p.isClear = function () {
        var length = this.levelRequireElementArray.length;
        for (var i = 0; i < length; i++) {
            if (this.levelRequireElementArray[i].num > 0) {
                return false;
            }
        }
        return true;
    };
    p.openChange = function () {
        this.levelRequireElementArray = [];
    };
    return LevelRequire;
})();
egret.registerClass(LevelRequire,"LevelRequire");
