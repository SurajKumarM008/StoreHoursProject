
using Microsoft.Dynamics.Commerce.Runtime;
using Microsoft.Dynamics.Commerce.Runtime.Messages;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace GasStationSample.CommerceRuntime
{
    [DataContract]
    public sealed class MyDataResponse : Response
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetStoreHoursDataResponse"/> class.
        /// </summary>
        /// <param name="dayHours">The collection of store hours.</param>
        public MyDataResponse(PagedResult<MyEntity> dayHours)
        {
            this.DayHours = dayHours;
        }

        /// <summary>
        /// Gets the found store hours as a paged result set.
        /// </summary>
        [DataMember]
        public PagedResult<MyEntity> DayHours { get; private set; }
    }
}
