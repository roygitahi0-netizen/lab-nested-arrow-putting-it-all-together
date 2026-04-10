function createLoginTracker() {
  let failedAttempts = 0;

  return function (isSuccess) {
    if (isSuccess) {
      failedAttempts = 0;
      return "Login successful";
    }

    failedAttempts++;

    if (failedAttempts >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    return `Attempt ${failedAttempts}: Login failed`;
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};