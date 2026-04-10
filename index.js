function createLoginTracker() {
  let failedAttempts = 0;

  return function (isSuccess) {
    if (isSuccess) {
      failedAttempts = 0;
      return "Login successful";
    }

    failedAttempts++;

    if (failedAttempts >= 3) {
      return "Account locked";
    }

    return `Failed attempts: ${failedAttempts}`;
  };
}

module.exports = createLoginTracker;

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};