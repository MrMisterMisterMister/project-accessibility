﻿using Microsoft.AspNetCore.Mvc;
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
            _logger.LogInformation("Attempting login for user: {Email}", model.Email);

            if (_db.IsValidUser(model.Email, model.Password))
            {
                _logger.LogInformation("User {Email} logged in successfully", model.Email);

                // success, generate cookie/session-token here

                return Ok();
            }

            _logger.LogWarning("Failed login attempt for user: {Email}", model.Email);
            return Unauthorized();
        }
    }

    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
