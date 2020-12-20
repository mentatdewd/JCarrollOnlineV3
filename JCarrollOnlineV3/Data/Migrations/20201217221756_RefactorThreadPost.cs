using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class RefactorThreadPost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateIndex(
                name: "IX_ForumThreadEntrys_ParentId",
                table: "ForumThreadEntrys",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumThreadEntrys_RootId",
                table: "ForumThreadEntrys",
                column: "RootId");

            migrationBuilder.AddForeignKey(
                name: "FK_ForumThreadEntrys_ForumThreadEntrys_ParentId",
                table: "ForumThreadEntrys",
                column: "ParentId",
                principalTable: "ForumThreadEntrys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ForumThreadEntrys_ForumThreadEntrys_RootId",
                table: "ForumThreadEntrys",
                column: "RootId",
                principalTable: "ForumThreadEntrys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForumThreadEntrys_ForumThreadEntrys_ParentId",
                table: "ForumThreadEntrys");

            migrationBuilder.DropForeignKey(
                name: "FK_ForumThreadEntrys_ForumThreadEntrys_RootId",
                table: "ForumThreadEntrys");

            migrationBuilder.DropIndex(
                name: "IX_ForumThreadEntrys_ParentId",
                table: "ForumThreadEntrys");

            migrationBuilder.DropIndex(
                name: "IX_ForumThreadEntrys_RootId",
                table: "ForumThreadEntrys");

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 12, 7, 17, 14, 922, DateTimeKind.Local).AddTicks(8255), new DateTime(2020, 12, 12, 7, 17, 14, 926, DateTimeKind.Local).AddTicks(4533) });

            migrationBuilder.UpdateData(
                table: "Fora",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2020, 12, 12, 7, 17, 14, 926, DateTimeKind.Local).AddTicks(5397), new DateTime(2020, 12, 12, 7, 17, 14, 926, DateTimeKind.Local).AddTicks(5428) });
        }
    }
}
