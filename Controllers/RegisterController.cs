using Microsoft.AspNetCore.Mvc;
using project_accessibility;

namespace project_accessibility.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly MyAccessibleDatabase _db;
        private readonly ILogger<RegisterController> _logger;

        public RegisterController(MyAccessibleDatabase db, ILogger<RegisterController> logger)
        {
            _db = db;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Register([FromBody] RegisterModel model)
        {
            _logger.LogInformation("Attempting registration for user: {FirstName} {LastName}", model.FirstName, model.LastName);

            if (_db.EmailAlreadyExist(model.Email))
            {
                _logger.LogWarning("(Deze email is al in gebruik in een account");
                return Conflict("There is an existing account with email");
            }

            _db.AddUser(
                model.FirstName, 
                model.MiddleName,
                model.LastName,
                model.Email,
                model.Password,
                model.TelephoneNumber,
                model.SecondTelephoneNumber
                );
            _logger.LogInformation("Account registered successfully for {FirstName} {LastName}", model.FirstName, model.LastName);

            return Ok("Registration successful");
        }
    }

    public class RegisterModel
    {
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
