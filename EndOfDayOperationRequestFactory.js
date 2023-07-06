System.register(["./EndOfDayOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var EndOfDayOperationRequest_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (EndOfDayOperationRequest_1_1) {
                EndOfDayOperationRequest_1 = EndOfDayOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new EndOfDayOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/StoreCodes/Codes/src/StoreCommerceSamples/Solutions/GasStationSample/Pos/Operations/EndOfDayOperationRequestFactory.js.map