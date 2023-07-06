
using Microsoft.Dynamics.Commerce.Runtime.ComponentModel.DataAnnotations;
using Microsoft.Dynamics.Commerce.Runtime.DataModel;
using System;
using System.Runtime.Serialization;
using SystemAnnotations = System.ComponentModel.DataAnnotations;
using SystemDataAnnotations = System.ComponentModel.DataAnnotations;
namespace GasStationSample.CommerceRuntime
{
 

    public class MyEntity : CommerceEntity
    {
        private const string DayColumn = "DAY";
        private const string OpenTimeColumn = "OPENTIME";
        private const string ClosingTimeColumn = "CLOSINGTIME";
        private const string IdColumn = "RECID";
        public const string StoreNumberColumn = "STORENUMBER";
        public MyEntity()
            : base("MyEntity")
        {
        }


        [SystemDataAnnotations.Key]
        [Key]
        [DataMember]
        [Column(IdColumn)]
        public int RECID
        {
            get { return (int)this[IdColumn]; }
            set { this[IdColumn] = value; }
        }


        [DataMember]
        [Column(StoreNumberColumn)]
        public int STORENUMBER
        {
            get { return (int)this[StoreNumberColumn]; }
            set { this[StoreNumberColumn] = value; }
        }



        [DataMember]
        [Column(DayColumn)]
        public string DAY
        {
            get { return (string)this[DayColumn]; }
            set { this[DayColumn] = value; }
        }


        [DataMember]
        [Column(OpenTimeColumn)]
        public DateTime OPENTIME
        {
            get { return (DateTime)this[OpenTimeColumn]; }
            set { this[OpenTimeColumn] = value; }
        }


        [DataMember]
        [Column(ClosingTimeColumn)]
        public DateTime CLOSINGTIME
        {
            get { return (DateTime)this[ClosingTimeColumn]; }
            set { this[ClosingTimeColumn] = value; }
        }
    }
}