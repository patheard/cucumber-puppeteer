// These are ways of being able to identify HTML elements to interact with and check.
const selectors = {
  links: {
    Signup: 'a[href="/signup"]',
    Login: 'a[href="/login"]',
    Logout: 'a.logout',
    'I have forgotten my password': 'a[href="/forgot-password"]',
    'Your account': 'a[href="/account"]'
  },
  buttons: {
    Signup: 'button',
    Login: 'button',
    'Send email': 'button',
    'Reset password': 'button',
    'Change email': 'button',
    'Change password': 'button#change-password-button',
    'Close account': 'button'
  }
};

module.exports = selectors;
