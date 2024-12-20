using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace WebApplication6.Controllers
{
    public class AccountController : Controller
    {
        // GET: /Account/Login
        public IActionResult Login()
        {
            return View();
        }

        // POST: /Account/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login(string phoneNumber, string password)
        {
            // Authentication logic here
            if (phoneNumber == "0123456789" && password == "password")
            {
                // Set session and sign-in
                HttpContext.Session.SetString("UserName", "Test User");

                var claims = new[] { new Claim(ClaimTypes.Name, "Test User") };
                var identity = new ClaimsIdentity(claims, "CookieAuth");
                var principal = new ClaimsPrincipal(identity);

                HttpContext.SignInAsync("CookieAuth", principal);
                return RedirectToAction("Index", "Home");
            }

            ViewBag.ErrorMessage = "Invalid credentials.";
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            // Sign out the user
            await HttpContext.SignOutAsync("CookieAuth");

            // Clear session
            HttpContext.Session.Remove("UserName");

            // Redirect to the login page
            return RedirectToAction("Login", "Account");
        }
    }
}
