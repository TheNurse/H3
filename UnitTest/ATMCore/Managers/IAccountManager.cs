using ATMCore.Account;
using ATMCore.User;

namespace ATMCore.Managers
{
    public interface IAccountManager
    {
        string ShowBalance(IAccount account);
        void WithdrawMoney(IUser user, double amount);
        bool Authenticate(string pin, IUser user);

        void LogoutUser(IUser user);

        void BlockAccount();
    }
}