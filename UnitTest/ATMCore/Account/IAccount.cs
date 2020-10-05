using System;
using ATMCore.User;

namespace ATMCore.Account
{
    public interface IAccount
    {
        string AccountName { get; }
        string Pin { get; }
        IUser User { get; }
        double AccountBalance { get; set; }
        DateTime ExpDate { get; }
        bool AccountIsValid { get; }
    }
}