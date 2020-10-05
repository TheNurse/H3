using System;
using ATMCore.Account;

namespace ATMCore.User
{
    public class User : IUser
    {
        public string Pin { get; }
        public IAccount Account { get; }
        public bool UserIsLoggedIn { get; set; }

        public User(string pin)
        {
            Pin = pin;
            Account = new Account.Account("NormalAccount", this, 100000, DateTime.Today.AddMonths(8),true, pin);
            UserIsLoggedIn = false;
        }
    }
}
    