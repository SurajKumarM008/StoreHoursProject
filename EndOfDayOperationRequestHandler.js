System.register(["PosApi/Create/Operations", "./EndOfDayOperationResponse", "./EndOfDayOperationRequest"], function (exports_1, context_1) {
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
    var Operations_1, EndOfDayOperationResponse_1, EndOfDayOperationRequest_1, EndOfDayOperationRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (EndOfDayOperationResponse_1_1) {
                EndOfDayOperationResponse_1 = EndOfDayOperationResponse_1_1;
            },
            function (EndOfDayOperationRequest_1_1) {
                EndOfDayOperationRequest_1 = EndOfDayOperationRequest_1_1;
            }
        ],
        execute: function () {
            EndOfDayOperationRequestHandler = (function (_super) {
                __extends(EndOfDayOperationRequestHandler, _super);
                function EndOfDayOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EndOfDayOperationRequestHandler.prototype.supportedRequestType = function () {
                    return EndOfDayOperationRequest_1.default;
                };
                EndOfDayOperationRequestHandler.prototype.executeAsync = function (printRequest) {
                    this.context.navigator.navigate("MyView");
                    var returnPromise = Promise.resolve({
                        canceled: false,
                        data: new EndOfDayOperationResponse_1.default()
                    });
                    return returnPromise;
                };
                return EndOfDayOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", EndOfDayOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/StoreCodes/Codes/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Operations/EndOfDayOperationRequestHandler.js.map