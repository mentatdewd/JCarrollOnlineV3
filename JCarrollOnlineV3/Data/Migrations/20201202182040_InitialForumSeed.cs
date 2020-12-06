using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class InitialForumSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Fora",
                columns: new[] { "Id", "CreatedAt", "Description", "Title", "UpdatedAt" },
                values: new object[] { 1, new DateTime(2020, 12, 2, 10, 20, 39, 918, DateTimeKind.Local).AddTicks(7205), "Test forum description", "Test forum", new DateTime(2020, 12, 2, 10, 20, 39, 922, DateTimeKind.Local).AddTicks(4473) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
