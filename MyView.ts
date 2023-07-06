import { CustomViewControllerBase, ICustomViewControllerConfiguration, ICustomViewControllerContext } from "PosApi/Create/Views";
import { ProxyEntities, ClientEntities } from "PosApi/Entities";
import { Entities } from "../../DataService/DataServiceEntities.g"
//import { ProxyEntities } from "PosApi/Entities";
//import { Entities } from "../../DataService/DataServiceEntities.g"
import { MyEntities } from "../../DataService/DataServiceRequests.g";
import ko from "knockout";
//import { IDataList } from "PosApi/Consume/Controls";
import * as Controls from "PosApi/Consume/Controls";

export default class MyView extends CustomViewControllerBase {
    public RECID: ko.Observable<number>;
    public STORENUMBER: ko.Observable<number>;
    public DAY: ko.Observable<string>;
    public OPENTIME: ko.Observable<Date>;
    public CLOSINGTIME: ko.Observable <Date>;
    public ExtensionProperties: ProxyEntities.CommerceProperty[];
    paginatedNormalCustList: Controls.IPaginatedDataList<Entities.MyEntity>;
   



    constructor(context: ICustomViewControllerContext) {
        let config: ICustomViewControllerConfiguration = {
            title: ""
        };
        super(context, config);
    

    }



    dispose(): void {
        // Implementation for the dispose method, if needed.
    }
    async onReady(element: HTMLElement): Promise<void> {

        this.createDataListForNormalCustomer(element);
        ko.applyBindings(this, element);

       


        }
    createDataListForNormalCustomer(element: HTMLElement) {



        let paginatedDataSource: Controls.IPaginatedDataSource<Entities.MyEntity> = {
            pageSize: 20,
            loadDataPage: this.loadMyEntities.bind(this)
        };
        let dataListOptions: Readonly<Controls.IPaginatedDataListOptions<Entities.MyEntity>> = {
            columns: [
                {
                    title: "STORENUMBER",
                    ratio: 20,
                    collapseOrder: 5,
                    minWidth: 100,
                    computeValue: (value: Entities.MyEntity): string => {
                        return value.STORENUMBER.toString();
                    }
                },
                {
                    title: "RECID",
                    ratio: 20,
                    collapseOrder: 4,
                    minWidth: 100,
                    computeValue: (value: Entities.MyEntity): string => {
                        return value.RECID.toString();
                    }
                },
               {
                    title: "DAY",
                    ratio: 20,
                    collapseOrder: 4,
                    minWidth: 100,
                    computeValue: (value: Entities.MyEntity): string => {
                        return value.DAY;
                    }
                },

                {
                    title: "OPENTIME",
                    ratio: 15,
                    collapseOrder: 2,
                    minWidth: 100,
                    computeValue: (value: Entities.MyEntity): string => {
                        return value.OPENTIME.toString();
                    }
                },
                {
                    title: "CLOSINGTIME",
                    ratio: 15,
                    collapseOrder: 1,
                    minWidth: 100,
                    computeValue: (value: Entities.MyEntity): string => {
                        return value.CLOSINGTIME.toString();
                    }
                }
            ],



            data: paginatedDataSource,
            interactionMode: Controls.DataListInteractionMode.SingleSelect
        };

        let normalCustDataListRootElem: HTMLDivElement = element.querySelector("#normalCustomersDataList") as HTMLDivElement;
        this.paginatedNormalCustList = this.context.controlFactory.create("", "PaginatedDataList", dataListOptions, normalCustDataListRootElem);
        this.paginatedNormalCustList.addEventListener("SelectionChanged", (eventData: { items: Entities.MyEntity[] }) => {
            this.normalCustomerSelectionChanged(eventData.items);
        });


    }
    normalCustomerSelectionChanged(items: Entities.MyEntity[]) {
        throw new Error("Method not implemented.");
    }


    private loadMyEntities(top: number): Promise<Entities.MyEntity[]> {

        let storehourreq: MyEntities.GetStoreHoursDetailsRequest<MyEntities.GetStoreHoursDetailsResponse> = new MyEntities.GetStoreHoursDetailsRequest<MyEntities.GetStoreHoursDetailsResponse>();
        return this.context.runtime.executeAsync(storehourreq)
            .then((storehourresp: ClientEntities.ICancelableDataResult<MyEntities.GetStoreHoursDetailsResponse>) => {
                let adder: Entities.MyEntity[] = storehourresp.data.result;
                //if (adder != null && adder.length > 0) {
                //    this.DAY = ko.observable(adder[0].DAY);
                //    this.OPENTIME = ko.observable(adder[0].OPENTIME);
                //    this.CLOSINGTIME = ko.observable(adder[0].CLOSINGTIME);
                //    this.STORENUMBER = ko.observable(adder[0].STORENUMBER);
                //    this.RECID = ko.observable(adder[0].RECID);
               // }
                return adder;
               
            });
       
    }


  }




  


