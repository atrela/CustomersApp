using CustomersApp.Model;
using Microsoft.EntityFrameworkCore;

namespace CustomersApp.Context
{
  public class CustomerContext : DbContext
  {
    public CustomerContext()
    {
    }

    public CustomerContext(DbContextOptions<CustomerContext> options)
            : base(options)
    {
    }

    public DbSet<Customer> Customers { get; set; }
  }
}
