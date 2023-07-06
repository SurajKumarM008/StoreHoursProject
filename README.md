# StoreHoursProject
This file contains the code that is required for creating a new view in POS
The view that is added in this project is STORE HOURS VIEW
Here we have retrieved the data from db and displayed that data in the newly created view page in the pos end
The method implement to view the data as table view is the datalist

// The Below code will display the data in a table ( one data displayed at a time ). This can be done by using data list also. 
In the code the data is displayed in datalist

// Single data in a table implementation code
        let storehourreq: MyEntities.GetStoreHoursDetailsRequest<MyEntities.GetStoreHoursDetailsResponse> = new MyEntities.GetStoreHoursDetailsRequest<MyEntities.GetStoreHoursDetailsResponse>();
        this.context.runtime.executeAsync(storehourreq)
            .then((storehourresp: ClientEntities.ICancelableDataResult<MyEntities.GetStoreHoursDetailsResponse>): void => {
                let adder: Entities.MyEntity[] = storehourresp.data.result;
                if (adder != null && adder.length > 0) {
                    this.DAY = ko.observable(adder[0].DAY);
                    this.OPENTIME = ko.observable(adder[0].OPENTIME);
                    this.CLOSINGTIME = ko.observable(adder[0].CLOSINGTIME);
                    this.STORENUMBER = ko.observable(adder[0].STORENUMBER);
                    this.RECID = ko.observable(adder[0].RECID);
                }

                ko.applyBindings(this, element);

            }).catch((errr: any) => {
                console.log("error" + JSON.stringify(errr));
            });
