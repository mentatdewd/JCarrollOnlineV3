using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class RevampDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowerId",
                table: "FollowersFollowing");

            migrationBuilder.DropForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowingId",
                table: "FollowersFollowing");

            migrationBuilder.DropForeignKey(
                name: "FK_MicroPost_AspNetUsers_Author",
                table: "MicroPost");

            migrationBuilder.DropIndex(
                name: "IX_MicroPost_Author",
                table: "MicroPost");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FollowersFollowing",
                table: "FollowersFollowing");

            migrationBuilder.DropColumn(
                name: "Author",
                table: "MicroPost");

            migrationBuilder.DropColumn(
                name: "Author",
                table: "BlogItemComments");

            migrationBuilder.AddColumn<string>(
                name: "AuthorId",
                table: "MicroPost",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<int>(
                name: "ForumId",
                table: "ForumModerators",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "FollowingId",
                table: "FollowersFollowing",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "FollowerId",
                table: "FollowersFollowing",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "FollowersFollowing",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "AuthorId",
                table: "BlogItemComments",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_FollowersFollowing",
                table: "FollowersFollowing",
                column: "Id");

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

            migrationBuilder.CreateIndex(
                name: "IX_MicroPost_AuthorId",
                table: "MicroPost",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumModerators_ForumId",
                table: "ForumModerators",
                column: "ForumId");

            migrationBuilder.CreateIndex(
                name: "IX_FollowersFollowing_FollowerId",
                table: "FollowersFollowing",
                column: "FollowerId");

            migrationBuilder.CreateIndex(
                name: "IX_BlogItemComments_AuthorId",
                table: "BlogItemComments",
                column: "AuthorId");

            migrationBuilder.AddForeignKey(
                name: "FK_BlogItemComments_AspNetUsers_AuthorId",
                table: "BlogItemComments",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowerId",
                table: "FollowersFollowing",
                column: "FollowerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowingId",
                table: "FollowersFollowing",
                column: "FollowingId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ForumModerators_Fora_ForumId",
                table: "ForumModerators",
                column: "ForumId",
                principalTable: "Fora",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MicroPost_AspNetUsers_AuthorId",
                table: "MicroPost",
                column: "AuthorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BlogItemComments_AspNetUsers_AuthorId",
                table: "BlogItemComments");

            migrationBuilder.DropForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowerId",
                table: "FollowersFollowing");

            migrationBuilder.DropForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowingId",
                table: "FollowersFollowing");

            migrationBuilder.DropForeignKey(
                name: "FK_ForumModerators_Fora_ForumId",
                table: "ForumModerators");

            migrationBuilder.DropForeignKey(
                name: "FK_MicroPost_AspNetUsers_AuthorId",
                table: "MicroPost");

            migrationBuilder.DropIndex(
                name: "IX_MicroPost_AuthorId",
                table: "MicroPost");

            migrationBuilder.DropIndex(
                name: "IX_ForumModerators_ForumId",
                table: "ForumModerators");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FollowersFollowing",
                table: "FollowersFollowing");

            migrationBuilder.DropIndex(
                name: "IX_FollowersFollowing_FollowerId",
                table: "FollowersFollowing");

            migrationBuilder.DropIndex(
                name: "IX_BlogItemComments_AuthorId",
                table: "BlogItemComments");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "MicroPost");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "FollowersFollowing");

            migrationBuilder.DropColumn(
                name: "AuthorId",
                table: "BlogItemComments");

            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "MicroPost",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<int>(
                name: "ForumId",
                table: "ForumModerators",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "FollowingId",
                table: "FollowersFollowing",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "FollowerId",
                table: "FollowersFollowing",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "BlogItemComments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_FollowersFollowing",
                table: "FollowersFollowing",
                columns: new[] { "FollowerId", "FollowingId" });

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

            migrationBuilder.CreateIndex(
                name: "IX_MicroPost_Author",
                table: "MicroPost",
                column: "Author");

            migrationBuilder.AddForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowerId",
                table: "FollowersFollowing",
                column: "FollowerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FollowersFollowing_AspNetUsers_FollowingId",
                table: "FollowersFollowing",
                column: "FollowingId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MicroPost_AspNetUsers_Author",
                table: "MicroPost",
                column: "Author",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
