//using RestSharp;

//namespace project_accessibility
//{
//    public static class MailgunEmailVerification
//    {
//        public static RestResponse SendSimpleMessage()
//        {
//            RestClientOptions client = new RestClientOptions();
//            client.BaseUrl = "https://api.mailgun.net/v3";
//            client.Authenticator =
//            new HttpBasicAuthenticator("api",
//                                       "<PRIVATE_API_KEY>");
//            RestRequest request = new RestRequest();
//            request.AddParameter("domain", "sandboxe463cd0ea7294343ad3d6bf7f3aa1ffb.mailgun.org", ParameterType.UrlSegment);
//            request.Resource = "{domain}/messages";
//            request.AddParameter("from", "Mailgun Sandbox <postmaster@sandboxe463cd0ea7294343ad3d6bf7f3aa1ffb.mailgun.org>");
//            request.AddParameter("to", "Christopher Mailgun Yeung <22103260@student.hhs.nl>");
//            request.AddParameter("subject", "Hello Christopher Mailgun Yeung");
//            request.AddParameter("text", "Congratulations Christopher Mailgun Yeung, you just sent an email with Mailgun!  You are truly awesome!");
//            request.Method = Method.POST;
//            return client.Execute(request);
//        }

//        // You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

//        // You can send up to 300 emails/day from this sandbox server.
//        // Next, you should add your own domain so you can send 10000 emails/month for free.
//    }
//}
