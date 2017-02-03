const login = (username, password) => {
  if(username !== 'admin' || password !== 'admin') {
    console.log('incorrect login');
  } else {
    console.log('logged in');
  }
};

module.exports = login;