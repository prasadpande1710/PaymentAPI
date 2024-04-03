using Microsoft.EntityFrameworkCore;
using System.Data;

namespace PaymentAPI.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<PaymentDetails> PaymentDetails { get; set; }
    }
}
