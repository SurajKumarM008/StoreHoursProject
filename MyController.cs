using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using Microsoft.Dynamics.Commerce.Runtime.Hosting.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GasStationSample.CommerceRuntime
{
  
    

    /// <summary>
    /// The controller to retrieve a new entity.
    /// </summary>
    [RoutePrefix("MyEntities")]
    [BindEntity(typeof(MyEntity))]
    public class MyController : IController
    {
       
        //My Code
        [HttpPost]
        [Authorization(CommerceRoles.Device, CommerceRoles.Employee,CommerceRoles.Anonymous)]
        public async Task<PagedResult<MyEntity>> GetStoreHoursDetails(IEndpointContext context, QueryResultSettings queryResultSettings)
        {
            var request = new MyDataRequest() {QueryResultSettings=queryResultSettings };
            var response = await context.ExecuteAsync<MyDataResponse>(request).ConfigureAwait(false);
            return  response.DayHours;
        }


        [HttpPost]
        [Authorization(CommerceRoles.Device, CommerceRoles.Employee, CommerceRoles.Anonymous)]
        public async Task<string> GetVersion(IEndpointContext context, string storeNum)
        {

            return "Test_1.0";
        }

    }
}    
