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
    private readonly CustomerContext _context;
    private readonly CustomerRepository _repository;

    public CustomerController(CustomerContext context)
    {
      _context = context;
      _repository = new CustomerRepository(_context);
    }

    [HttpGet]
    public IEnumerable<Customer> Get()
    {
      return _repository.GetAll();
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
