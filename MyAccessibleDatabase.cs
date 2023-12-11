using Microsoft.EntityFrameworkCore;
using System.Linq;
using project_accessibility;
using project_accessibility.Entities;
using Microsoft.AspNetCore.Identity;


namespace project_accessibility
{
    public class MyAccessibleDatabase : DbContext
    {

        private readonly PasswordHashingService _passwordHashingService;
        public DbSet<User> Users { get; set; } // Remove nullable annotation

        public MyAccessibleDatabase(DbContextOptions<MyAccessibleDatabase> options, PasswordHashingService passwordHashingService)
            : base(options)
        {
            _passwordHashingService = passwordHashingService;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string connectionString = GetConnectionString();
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        private string GetConnectionString()
        {
            string my_password = "ikbendeadmin888!";
            string connectionString = $"Server=tcp:myaccessibilityserver.database.windows.net,1433;Initial Catalog=AccessiblityDB;Persist Security Info=False;User ID=adminsa;Password={my_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            return connectionString;
        }

        public bool IsValidUser(string username, string password)
        {
            if (Users != null)
            {
                var user = Users.FirstOrDefault(u => u.Username == username);

                if (user != null)
                {
                    // Verify provided password against the hashed password in the database
                    var passwordVerificationResult = _passwordHashingService.VerifyPassword(user.Password, password);
                    return passwordVerificationResult == PasswordVerificationResult.Success;
                }
            }

            return false;
        }


    }
}
