using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace project_accessibility
{
    public class MyAccessibleDatabase : DbContext
    {
        public DbSet<User> Users { get; set; } // DbSet for User entity
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Replace with your actual connection string
                string my_password = "ikbendeadmin888!";
                string connectionString = $"Server=tcp:myaccessibilityserver.database.windows.net,1433;Initial Catalog=AccessiblityDB;Persist Security Info=False;User ID=adminsa;Password={my_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        public bool IsValidUser(string username, string password)
        {
            var user = Users.FirstOrDefault(u => u.Username == username && u.Password == password);
            return user != null;
        }

        public class User
        {
            public int Id { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }



    }
}
