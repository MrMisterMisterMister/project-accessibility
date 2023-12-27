using project_accessibility;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using project_accessibility.Entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

//Database
builder.Services.AddDbContext<MyAccessibleDatabase>();

//Password hasher
builder.Services.AddScoped<PasswordHashingService>();
builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();

// Authentication and Authorization
builder.Services.AddAuthentication(options =>
{
    {
        options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
    }
})
    .AddCookie()
    .AddGoogle(GoogleDefaults.AuthenticationScheme, options =>
    {
        options.ClientId = builder.Configuration.GetSection("GoogleAuth:ClientId").Value;
        options.ClientSecret = builder.Configuration.GetSection("GoogleAuth:ClientSecret").Value;
    });


    //.AddCookie(options =>
    //{
    //    options.LoginPath = "/Login"; //hhmmmmmmmmmmmmmmmm
    //    options.AccessDeniedPath = "/AccessDenied";
    //});

builder.Services.AddAuthorization();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication(); // authentication middleware
app.UseAuthorization();  // authorization middleware

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}"
);

app.MapFallbackToFile("index.html");

app.Run();