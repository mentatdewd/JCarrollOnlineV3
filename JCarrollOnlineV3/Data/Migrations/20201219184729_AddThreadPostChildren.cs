using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class AddThreadPostChildren : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 19, 10, 47, 28, 427, DateTimeKind.Local).AddTicks(9643), new DateTime(2020, 12, 19, 10, 47, 28, 433, DateTimeKind.Local).AddTicks(2985) });

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 19, 10, 47, 28, 433, DateTimeKind.Local).AddTicks(4247), new DateTime(2020, 12, 19, 10, 47, 28, 433, DateTimeKind.Local).AddTicks(4299) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 17, 14, 17, 56, 276, DateTimeKind.Local).AddTicks(6152), new DateTime(2020, 12, 17, 14, 17, 56, 280, DateTimeKind.Local).AddTicks(3230) });

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 17, 14, 17, 56, 280, DateTimeKind.Local).AddTicks(4099), new DateTime(2020, 12, 17, 14, 17, 56, 280, DateTimeKind.Local).AddTicks(4132) });
        }
    }
}
