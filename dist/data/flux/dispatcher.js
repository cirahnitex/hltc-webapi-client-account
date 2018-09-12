var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Dispatcher } from "flux";
var DelayedDispatcher = /** @class */ (function (_super) {
    __extends(DelayedDispatcher, _super);
    function DelayedDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DelayedDispatcher.prototype.dispatch = function (action) {
        var _this = this;
        setTimeout(function () { return _super.prototype.dispatch.call(_this, action); }, 0);
    };
    return DelayedDispatcher;
}(Dispatcher));
export var dispatcher = new DelayedDispatcher();
//# sourceMappingURL=dispatcher.js.map