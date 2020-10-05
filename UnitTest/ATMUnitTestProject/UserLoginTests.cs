using System;
using ATMCore.Managers;
using ATMCore.User;
using Xunit;

namespace ATMUnitTestProject
{
    public class UserLoginTests
    {
        [Fact]
        public void Login_UserAuthenticates()
        {
            // Arrange
            string pin = "8888";
            User user = new User(pin);
            IAccountManager manager = new AccountManager();
            // Act
            bool authenticated = manager.Authenticate(pin, user);
            // Assert
            Assert.True(authenticated);
        }
        
        [Fact]
        public void Login_UserDoesNotAuthenticate()
        {
            // Arrange
            string pin = "1234";
            string pin2 = "4321";
            User user = new User(pin);
            IAccountManager manager = new AccountManager();
            // Act
            bool authenticated = manager.Authenticate(pin2, user);
            // Assert
            Assert.False(authenticated);
        }
    }
}
