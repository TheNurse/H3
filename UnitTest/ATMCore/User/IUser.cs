using ATMCore.Account;

namespace ATMCore.User
{
    public interface IUser
    {
        IAccount Account { get; }
        bool UserIsLoggedIn { get; set; }
    }
}