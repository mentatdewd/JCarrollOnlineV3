using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class AddApplicationUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "MicroPost",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "ForumThreadEntrys",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "ForumModerators",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "Fora",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "FollowersFollowing",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "FollowersFollowing",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "FollowersFollowing",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "Deleted",
                table: "BlogItems",
                nullable: false,
                defaultValue: false);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "MicroPost");

            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "ForumThreadEntrys");

            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "ForumModerators");

            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "Fora");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "FollowersFollowing");

            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "FollowersFollowing");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "FollowersFollowing");

            migrationBuilder.DropColumn(
                name: "Deleted",
                table: "BlogItems");

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
        }
    }
}
