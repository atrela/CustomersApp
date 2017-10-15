using CustomersApp.Context;
using CustomersApp.Model;
using System.Collections.Generic;
using System.Linq;

namespace CustomersApp.Repositories
{
  public class CustomerRepository
  {
    private CustomerContext _context;

    public CustomerRepository(CustomerContext context)
    {
      _context = context;
    }

    public void Add(Customer customer)
    {
      _context.Customers.Add(customer);
      _context.SaveChanges();
    }

    public List<Customer> GetAll()
    {
      return _context.Customers.ToList();
    }
  }
}
