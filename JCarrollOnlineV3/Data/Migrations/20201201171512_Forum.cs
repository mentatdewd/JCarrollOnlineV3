using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace JCarrollOnlineV3.Data.Migrations
{
    public partial class Forum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ForumId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Fora",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(maxLength: 255, nullable: false),
                    Description = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    UpdatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fora", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ForumModerators",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModeratorId = table.Column<string>(nullable: true),
                    ForumId = table.Column<int>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    UpdatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForumModerators", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ForumModerators_AspNetUsers_ModeratorId",
                        column: x => x.ModeratorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ForumThreadEntrys",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(maxLength: 255, nullable: true),
                    Content = table.Column<string>(nullable: true),
                    Locked = table.Column<bool>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    UpdatedAt = table.Column<DateTime>(nullable: false),
                    PostNumber = table.Column<int>(nullable: false),
                    ParentId = table.Column<int>(nullable: true),
                    RootId = table.Column<int>(nullable: true),
                    ForumId = table.Column<int>(nullable: false),
                    AuthorId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForumThreadEntrys", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ForumThreadEntrys_AspNetUsers_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ForumThreadEntrys_Fora_ForumId",
                        column: x => x.ForumId,
                        principalTable: "Fora",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ForumId",
                table: "AspNetUsers",
                column: "ForumId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumModerators_ModeratorId",
                table: "ForumModerators",
                column: "ModeratorId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumThreadEntrys_AuthorId",
                table: "ForumThreadEntrys",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_ForumThreadEntrys_ForumId",
                table: "ForumThreadEntrys",
                column: "ForumId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Fora_ForumId",
                table: "AspNetUsers",
                column: "ForumId",
                principalTable: "Fora",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Fora_ForumId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "ForumModerators");

            migrationBuilder.DropTable(
                name: "ForumThreadEntrys");

            migrationBuilder.DropTable(
                name: "Fora");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_ForumId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "ForumId",
                table: "AspNetUsers");
        }
    }
}
