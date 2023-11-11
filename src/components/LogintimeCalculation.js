function calculateDaysSinceLogin(loginTime) {
  // Parse the login time string into a Date object
  const loginDate = new Date(loginTime);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - loginDate;

  // Calculate the number of days by dividing milliseconds by (1000 * 60 * 60 * 24)
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysPassed >= 30) {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("Logtime");
  }

  return daysPassed;
}

// Usage example:

const loginTime = localStorage.getItem("Logtime");
const daysSinceLogin = calculateDaysSinceLogin(loginTime);
console.log(`~file ~ logintimeCalculation.js ~ Line - 27 ~ Days since login: ${daysSinceLogin} days`);

export default calculateDaysSinceLogin;
