using CustomersApp.Model;
using System.Collections.Generic;

namespace CustomersApp.Repositories
{
  public interface ICustomerRepository
  {
    void Add(Customer customer);
    void Update(Customer customer);
    IList<Customer> GetAll();
    Customer Get(int id);
    void Delete(int id);

  }
}
