const pages = {
  home: '/',
  login: '/login',
  signup: '/signup',
  'forgot-password': '/forgot-password',
  account: '/account',
  'reset-password': token => `/reset-password/${token}`
};

module.exports = pages;
