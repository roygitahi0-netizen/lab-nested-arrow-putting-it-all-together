//Creating a login tracker function by inputting  the userInfo,username,password.
function createLoginTracker(userInfo, username, password) {
  return {
    username: username, //username
    password: password, //password  
    loginAttempts: 0, //number of login attempts
    lastLoginAttempt: null, //timestamp of the last login attempt
    isLocked: false, //account lock status
    userInfo: userInfo, //user info object


    //Initializing attempt count.
    initializeAttempts() {
      this.loginAttempts = 0;
      this.isLocked = false;
    },

    //Incrementing attempt count.
    incrementAttempts() {
      this.loginAttempts++;
      if (this.loginAttempts >= 3) {
        this.isLocked = true;
      }
    },

 //Arrow function to check and counts password.
    checkPassword: () => {  
      if (this.isLocked) {
        console.log('Account is locked. Please try again later.');
        return false;
      } 
    }
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};