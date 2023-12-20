﻿namespace project_accessibility.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? ConfirmPassword { get; set; }
        public string? TelephoneNumber { get; set; }
        public string? SecondTelephoneNumber { get; set; }
    }
}
