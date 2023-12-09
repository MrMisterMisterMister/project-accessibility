using Microsoft.EntityFrameworkCore;

namespace project_accessibility
{
    public class MyAccessibleDatabase : DbContext
    {
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

    }
}
