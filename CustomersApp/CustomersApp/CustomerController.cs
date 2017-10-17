using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CustomersApp.Repositories;
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
    public IEnumerable<Customer> GetAll()
    {
      return _repository.GetAll();
    }

    [HttpGet("{id}")]
    public Customer Get(int id)
    {
      return _repository.Get(id);
    }

    [HttpPost]
    public IActionResult Post([FromBody]Customer customer)
    {
      _repository.Add(customer);
      return Ok();
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody]Customer customer)
    {
      _repository.Update(customer);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      _repository.Delete(id);
      return Ok();
    }
  }
}
