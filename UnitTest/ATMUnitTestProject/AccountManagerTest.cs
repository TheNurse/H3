using System;
using System.Security.Authentication;
using ATMCore.Account;
using ATMCore.Managers;
using ATMCore.User;
using Xunit;

namespace ATMUnitTestProject
{
    public class AccountManagerTest
    {

        [Fact]
        public void ShowBalance_ValidUserShouldWork()
        {
            // Arrange 
            string pin = "1234";
            IUser user = new User(pin);
            IAccountManager manager = new AccountManager();

            // Act
            manager.Authenticate(pin, user);

            // Assert
            Assert.IsType<decimal>(manager.ShowBalance(user.Account));
        }

        [Fact]
        public void WithdrawFromBalance_ValidUserShouldWork()
        {
            // Arrange
            IAccountManager manager = new AccountManager();
            IUser user = new User("1234");

            // Act
            var exception = Record.Exception(() => manager.WithdrawMoney(user, 50000));

            // Assert
            Assert.Null(exception);
        }


        [Theory]
        [InlineData(1)]
        [InlineData(1235487)]
        [InlineData(0)]
        [InlineData(-5054)]
        public void WithdrawFromBalance_CantWithdrawOverBalance(double balanceAdd)
        {
            // Arrange
            string pin = "1234";
            IAccountManager manager = new AccountManager();
            IUser user = new User(pin);
            manager.Authenticate(pin, user);

            // Act
            user.Account.AccountBalance = balanceAdd;

            // Assert
            Assert.Throws<ArgumentException>("amount", () => manager.WithdrawMoney(user, (balanceAdd + 1)));
        }

        [Fact]
        public void WithdrawFromBalance_NullUserShouldThrowExeption()
        {
            // Arrange
            IAccountManager manager = new AccountManager();
            double balanceAdd = 1000;

            // Assert
            Assert.Throws<ArgumentException>("user", () => manager.WithdrawMoney(null, (balanceAdd + 1)));

        }
    }
}