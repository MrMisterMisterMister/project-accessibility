using Microsoft.AspNetCore.Identity;
using project_accessibility.Entities;

namespace project_accessibility
{
    public class PasswordHashingService
    {
        private readonly IPasswordHasher<User> _passwordHasher;

        public PasswordHashingService(IPasswordHasher<User> passwordHasher)
        {
            _passwordHasher = passwordHasher;
        }

        public string hashPassword(string password)
        {
            string hashedPassword = _passwordHasher.HashPassword(null, password);
            return hashedPassword;
        }

        public PasswordVerificationResult VerifyPassword(string hashedPassword, string providedPassword)
        {
            var result = _passwordHasher.VerifyHashedPassword(null, hashedPassword, providedPassword);
            return result;
        }
    }
}
