System.register(["PosApi/Create/Operations"], function (exports_1, context_1) {
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
    var Operations_1, EndOfDayOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            }
        ],
        execute: function () {
            EndOfDayOperationRequest = (function (_super) {
                __extends(EndOfDayOperationRequest, _super);
                function EndOfDayOperationRequest(correlationId) {
                    return _super.call(this, 7007, correlationId) || this;
                }
                return EndOfDayOperationRequest;
            }(Operations_1.ExtensionOperationRequestBase));
            exports_1("default", EndOfDayOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/StoreCodes/Codes/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Operations/EndOfDayOperationRequest.js.map