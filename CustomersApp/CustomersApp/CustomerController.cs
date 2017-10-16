using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustomersApp.Repositories;
using CustomersApp.Context;
using CustomersApp.Model;

namespace CustomersApp
{
  [Route("api/[controller]")]
  public class CustomerController : Controller
  {
    private readonly ICustomerRepository _repository;

    public CustomerController(ICustomerRepository repository)
    {
      _repository = repository;
    }

    [HttpGet]
    public IEnumerable<Customer> Get()
    {
      return _repository.GetAll();
    }

    [HttpGet("{id}")]
    public Customer Get(int id)
    {
      return _repository.Get(id);
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]Customer customer)
    {
      _repository.Add(customer);
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]Customer customer)
    {
      _repository.Update(customer);
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
