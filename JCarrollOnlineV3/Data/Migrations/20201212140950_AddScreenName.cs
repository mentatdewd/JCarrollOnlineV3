using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class AddScreenName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ScreenName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 12, 6, 9, 50, 202, DateTimeKind.Local).AddTicks(5425), new DateTime(2020, 12, 12, 6, 9, 50, 206, DateTimeKind.Local).AddTicks(1062) });

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 12, 6, 9, 50, 206, DateTimeKind.Local).AddTicks(1959), new DateTime(2020, 12, 12, 6, 9, 50, 206, DateTimeKind.Local).AddTicks(1990) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ScreenName",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 11, 13, 57, 54, 699, DateTimeKind.Local).AddTicks(8167), new DateTime(2020, 12, 11, 13, 57, 54, 703, DateTimeKind.Local).AddTicks(3921) });

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 11, 13, 57, 54, 703, DateTimeKind.Local).AddTicks(4787), new DateTime(2020, 12, 11, 13, 57, 54, 703, DateTimeKind.Local).AddTicks(4822) });
        }
    }
}
