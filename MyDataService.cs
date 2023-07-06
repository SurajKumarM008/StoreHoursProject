using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using Microsoft.Dynamics.Commerce.Runtime.DataServices.Messages;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Dynamics.Commerce.Runtime.Data;
namespace GasStationSample.CommerceRuntime
{


    public class MyDataService : IRequestHandlerAsync
    {
        //private const string DEFAULT_GASOLINE_ITEM_ID = "gasoline";
        //private static decimal COST_PER_UNIT = 3.599m;
        //private static Dictionary<string, IEnumerable<GasPump>> GasPumpsByStore;

        private static List<GasStationDetails> GasStations = new List<GasStationDetails>();
        private static List<StoreHours> StoreStations = new List<StoreHours>();
        private PagedResult<MyEntity> result;

        public IEnumerable<Type> SupportedRequestTypes
        {
            get
            {
                return new[]
                {

                    typeof(MyDataRequest)

                };
            }
        }


        public async Task<Response> Execute(Request request)
        {
            if (request == null)
            {
                throw new ArgumentNullException("request");
            }

            //await this.InitializeGasPumps(request).ConfigureAwait(false);
            Type reqType = request.GetType();
            //if (reqType == typeof(MyDataRequest))
            //{
            //    return await this.GetStoreHoursDetails((MyDataRequest)request);
            //}

            if(request is MyDataRequest)
            {
                MyDataRequest req = request as MyDataRequest;
                return await GetStoreHoursDetails(req).ConfigureAwait(false);
            }

            else
            {
                string message = string.Format(CultureInfo.InvariantCulture, "Request '{0}' is not supported.", reqType);
                throw new NotSupportedException(message);
            }
        }



        //Code
        private async Task<Response> GetStoreHoursDetails(MyDataRequest request)
        {
            ThrowIf.Null(request, "request");



            using (DatabaseContext databaseContext = new DatabaseContext(request.RequestContext))
            {
                var query = new SqlPagedQuery(request.QueryResultSettings)
                {
                    DatabaseSchema = "ext",
                    Select = new ColumnSet("DAY", "OPENTIME", "CLOSINGTIME", "RECID","STORENUMBER"),
                    From = "CONTOSORETAILSTOREHOURSVIEW",
                    Where = "STORENUMBER = 101",

                };

                result= await databaseContext.ReadEntityAsync<MyEntity>(query).ConfigureAwait(false);

            }
            return new MyDataResponse(result);


        }
    }
}
