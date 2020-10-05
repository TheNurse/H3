using System;
using ATMCore.User;

namespace ATMCore.Account
{
    public class Account : IAccount
    {
        public string AccountName { get; }
        public string Pin { get; }
        public IUser User { get; }
        public double AccountBalance { get; set; }
        public DateTime ExpDate { get; }
        public bool AccountIsValid { get; }

        public Account(string accountName, IUser user, double accountBalance, DateTime expDate, bool accountIsValid, string pin)
        {
            AccountName = accountName;
            User = user;
            AccountBalance = accountBalance;
            ExpDate = expDate;
            AccountIsValid = accountIsValid;
            Pin = pin;
        }
    }
}