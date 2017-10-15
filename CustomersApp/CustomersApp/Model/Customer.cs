using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomersApp.Model
{
  [Table("Customers")]
  public class Customer
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int CustomerId { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public string SureName { get; set; }

    [Required]
    public string Address { get; set; }

    [Required]
    [Column(TypeName = "varchar(9)"), MaxLength(9)]
    public string TelephoneNumber { get; set; }
  }
}
