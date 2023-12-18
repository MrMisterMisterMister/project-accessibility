using Microsoft.AspNetCore.Mvc;
using project_accessibility;

namespace project_accessibility.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly MyAccessibleDatabase _db;
        private readonly ILogger<LoginController> _logger;

        public LoginController(MyAccessibleDatabase db, ILogger<LoginController> logger)
        {
            _db = db;
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModel model)
        {
            _logger.LogInformation("Attempting login for user: {Username}", model.Username);

            if (_db.IsValidUser(model.Username, model.Password))
            {
                _logger.LogInformation("User {Username} logged in successfully", model.Username);

                // success, generate cookie/session-token here

                return Ok();
            }

            _logger.LogWarning("Failed login attempt for user: {Username}", model.Username);
            return Unauthorized();
        }
    }

    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
