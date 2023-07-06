System.register(["PosApi/Create/RequestHandlers"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var RequestHandlers_1, EndOfDayOperationResponse;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (RequestHandlers_1_1) {
                RequestHandlers_1 = RequestHandlers_1_1;
            }
        ],
        execute: function () {
            EndOfDayOperationResponse = (function (_super) {
                __extends(EndOfDayOperationResponse, _super);
                function EndOfDayOperationResponse() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return EndOfDayOperationResponse;
            }(RequestHandlers_1.Response));
            exports_1("default", EndOfDayOperationResponse);
        }
    };
});
//# sourceMappingURL=C:/StoreCodes/Codes/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Operations/EndOfDayOperationResponse.js.map