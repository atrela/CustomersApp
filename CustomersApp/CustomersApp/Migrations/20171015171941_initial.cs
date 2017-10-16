using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace CustomersApp.Migrations
{
  public partial class initial : Migration
  {
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.CreateTable(
          name: "Customers",
          columns: table => new
          {
            CustomerId = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Surname = table.Column<string>(type: "nvarchar(max)", nullable: false),
            TelephoneNumber = table.Column<string>(type: "varchar(9)", maxLength: 9, nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Customers", x => x.CustomerId);
          });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.DropTable(
          name: "Customers");
    }
  }
}
