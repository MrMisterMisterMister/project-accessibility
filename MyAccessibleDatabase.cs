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
        public DbSet<User> Users { get; set; } 

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

        public bool IsValidUser(string email, string password)
        {
            if (Users != null)
            {
                var user = Users.FirstOrDefault(u => u.Email == email);

                if (user != null)
                {
                    // Verify provided password against the hashed password in the database
                    var passwordVerificationResult = _passwordHashingService.VerifyPassword(user.Password, password);
                    return passwordVerificationResult == PasswordVerificationResult.Success;
                }
            }

            return false;
        }

        //public bool IsUsernameTaken(string username)
        //{
        //    if (Users != null)
        //    {
        //        return Users.Any(u => u.Username == username);
        //    }

        //    return false;
        //}

        public bool EmailAlreadyExist(string email)
        {
            if (Users != null)
            {
                return Users.Any(u => u.Email == email);
            }
            return false;
        }

        public void AddUser(string firstaName, string middleName, string lastName, string email, string password, string telephoneNumber, string secondTelephoneNumber)
        {
            var hashedPassword = _passwordHashingService.HashPassword(password);

            var newUser = new User
            {
                FirstName = firstaName,
                MiddleName = middleName,
                LastName = lastName,
                Email = email,
                Password = hashedPassword,
                TelephoneNumber = telephoneNumber,
                SecondTelephoneNumber = secondTelephoneNumber
            };

            Users.Add(newUser);
            SaveChanges();
        }

    }
}
