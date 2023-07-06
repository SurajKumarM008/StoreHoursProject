import { ExtensionOperationRequestType, ExtensionOperationRequestHandlerBase } from "PosApi/Create/Operations";
import EndOfDayOperationResponse from "./EndOfDayOperationResponse";
import EndOfDayOperationRequest from "./EndOfDayOperationRequest";
import { ClientEntities } from "PosApi/Entities";
//import { } from "../DataService/DataServiceRequests.g"
//import ExampleViewDialog from "../../Create/Dialogs/ExampleViewDialog"
//import { GetCurrentCartClientRequest, GetCurrentCartClientResponse } from "PosApi/Consume/Cart";
/**
* (Sample) Request handler for the EndOfDayOperationRequest class.
*/
export default class EndOfDayOperationRequestHandler<TResponse extends EndOfDayOperationResponse> extends ExtensionOperationRequestHandlerBase<TResponse> {
    /**
     * Gets the supported request type.
     * @return {RequestType<TResponse>} The supported request type.
     */
    public supportedRequestType(): ExtensionOperationRequestType<TResponse> {
        return EndOfDayOperationRequest;

    }

    /**
     * Executes the request handler asynchronously.
     * @param {EndOfDayOperationRequest<TResponse>} request The request.
     * @return {Promise<ICancelableDataResult<TResponse>>} The cancelable async result containing the response.
     */
    //public executeAsync(printRequest: EndOfDayOperationRequest<TResponse>): Promise<ClientEntities.ICancelableDataResult<TResponse>> {
    //    alert("clicked");
    //     /*this.context.navigator.navigate("ExampleView");*/
    //    /*        let GetCrntCartReq: GetCurrentCartClientRequest<GetCurrentCartClientResponse> = new GetCurrentCartClientRequest<GetCurrentCartClientResponse>();
    //    */
    //    return Promise.resolve({ canceled: false, data: <TResponse>new EndOfDayOperationResponse });
    //}


    public executeAsync(printRequest: EndOfDayOperationRequest<TResponse>)
        : Promise<ClientEntities.ICancelableDataResult<TResponse>> {
        this.context.navigator.navigate("MyView");

        let returnPromise = Promise.resolve(<ClientEntities.ICancelableDataResult<TResponse>>{
            canceled: false,
            data: <TResponse>new EndOfDayOperationResponse()
        });

        return returnPromise;
    }
}