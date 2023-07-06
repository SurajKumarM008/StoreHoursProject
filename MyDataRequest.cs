using Microsoft.Dynamics.Commerce.Runtime.Messages;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace GasStationSample.CommerceRuntime
{
    [DataContract]
    public sealed class MyDataRequest : Request
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetStoreHoursDataRequest"/> class.
        /// </summary>
        /// <param name="storeNumber">The store number.</param>
        public MyDataRequest()
        {

        }

        /// <summary>
        /// Gets the store number related to the request.
        /// </summary>

    }
}

