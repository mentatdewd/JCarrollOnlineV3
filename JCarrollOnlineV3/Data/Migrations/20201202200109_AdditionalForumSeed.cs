using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class AdditionalForumSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 2, 12, 1, 9, 147, DateTimeKind.Local).AddTicks(3776), new DateTime(2020, 12, 2, 12, 1, 9, 151, DateTimeKind.Local).AddTicks(2098) });

            migrationBuilder.InsertData(
                table: "Fora",
                columns: new[] { "Id", "CreatedAt", "Description", "Title", "UpdatedAt" },
                values: new object[] { 2, new DateTime(2020, 12, 2, 12, 1, 9, 151, DateTimeKind.Local).AddTicks(3005), "Test forum 2 description", "Test forum 2", new DateTime(2020, 12, 2, 12, 1, 9, 151, DateTimeKind.Local).AddTicks(3039) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 2, 10, 20, 39, 918, DateTimeKind.Local).AddTicks(7205), new DateTime(2020, 12, 2, 10, 20, 39, 922, DateTimeKind.Local).AddTicks(4473) });
        }
    }
}
