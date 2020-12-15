using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class ChangeAuthorIdToAuthor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MicroPost_AspNetUsers_AuthorId",
                table: "MicroPost");

            migrationBuilder.DropIndex(
                name: "IX_MicroPost_AuthorId",
                table: "MicroPost");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "MicroPost");

            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "MicroPost",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 11, 12, 8, 18, 780, DateTimeKind.Local).AddTicks(5044), new DateTime(2020, 12, 11, 12, 8, 18, 784, DateTimeKind.Local).AddTicks(1106) });

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 11, 12, 8, 18, 784, DateTimeKind.Local).AddTicks(1964), new DateTime(2020, 12, 11, 12, 8, 18, 784, DateTimeKind.Local).AddTicks(1996) });

            migrationBuilder.CreateIndex(
                name: "IX_MicroPost_Author",
                table: "MicroPost",
                column: "Author");

            migrationBuilder.AddForeignKey(
                name: "FK_MicroPost_AspNetUsers_Author",
                table: "MicroPost",
                column: "Author",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MicroPost_AspNetUsers_Author",
                table: "MicroPost");

            migrationBuilder.DropIndex(
                name: "IX_MicroPost_Author",
                table: "MicroPost");

            migrationBuilder.DropColumn(
                name: "Author",
                table: "MicroPost");

            migrationBuilder.AddColumn<string>(
                name: "AuthorId",
                table: "MicroPost",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 2, 12, 1, 9, 147, DateTimeKind.Local).AddTicks(3776), new DateTime(2020, 12, 2, 12, 1, 9, 151, DateTimeKind.Local).AddTicks(2098) });

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 2, 12, 1, 9, 151, DateTimeKind.Local).AddTicks(3005), new DateTime(2020, 12, 2, 12, 1, 9, 151, DateTimeKind.Local).AddTicks(3039) });

            migrationBuilder.CreateIndex(
                name: "IX_MicroPost_AuthorId",
                table: "MicroPost",
                column: "AuthorId");

            migrationBuilder.AddForeignKey(
                name: "FK_MicroPost_AspNetUsers_AuthorId",
                table: "MicroPost",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
