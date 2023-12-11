using Microsoft.AspNetCore.Mvc;
using project_accessibility;

namespace project_accessibility.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly MyAccessibleDatabase _db;

        public LoginController(MyAccessibleDatabase db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModel model)
        {
            if (_db.IsValidUser(model.Username, model.Password))
            {
                // Authentication successful, you can generate a token or set session information here
                return Ok(new { message = "Login successful" });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }
    }

    public class LoginModel
    {
        public string ?Username { get; set; }
        public string ?Password { get; set; }
    }
}
