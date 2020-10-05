using System.Security.Authentication;
using ATMCore.Account;
using ATMCore.User;

namespace ATMCore.Managers
{
    public class AccountManager : IAccountManager
    {
        public string ShowBalance(IAccount account) => 
            account.AccountBalance.ToString();

        public void WithdrawMoney(IUser user, double amount)
        {
            if (user.UserIsLoggedIn)
            {
                user.Account.AccountBalance -= amount;
            }
            else
            {
                throw new AuthenticationException();
            }
        }

        public bool Authenticate(string pin, IUser user)
        {
            if (pin == user.Account.Pin)
            {
                user.UserIsLoggedIn = true;
                return true;
            }

            return false;
        }

        public void LogoutUser(IUser user)
        {
            throw new System.NotImplementedException();
        }

        public void LogoutUser()
        {
            throw new System.NotImplementedException();
        }

        public void BlockAccount()
        {
            throw new System.NotImplementedException();
        }
    }
}