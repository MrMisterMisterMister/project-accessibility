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
            _logger.LogInformation("Attempting registration for user: {Username}", model.Username);

            if (_db.IsUsernameTaken(model.Username))
            {
                _logger.LogWarning("Username {Username} is already taken", model.Username);
                return Conflict("Username is already taken");
            }

            _db.AddUser(model.Username, model.Password);
            _logger.LogInformation("User {Username} registered successfully", model.Username);

            // Optionally, you can return a token or a success message upon registration
            return Ok("Registration successful");
        }
    }

    public class RegisterModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        // You can include additional fields for registration if needed
    }
}
