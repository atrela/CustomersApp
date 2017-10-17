using CustomersApp.Context;
using CustomersApp.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace CustomersApp.Repositories
{
  public class CustomerRepository : ICustomerRepository
  {
    private CustomerContext _context;
    private DbSet<Customer> _customerEntity;

    public CustomerRepository(CustomerContext context)
    {
      _context = context;
      _customerEntity = _context.Set<Customer>();
    }

    public void Add(Customer customer)
    {
      _customerEntity.Add(customer);
      _context.SaveChanges();
    }

    public void Delete(int id)
    {
      Customer customer = Get(id);
      _customerEntity.Remove(customer);
    }

    public Customer Get(int id)
    {
      return _customerEntity.SingleOrDefault(c => c.CustomerId == id);
    }

    public IList<Customer> GetAll()
    {
      return _customerEntity.ToList();
    }

    public void Update(Customer customer)
    {
      _customerEntity.Update(customer);
      _context.SaveChanges();
    }
  }
}
