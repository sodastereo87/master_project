
// log out button js

document.getElementById('logout-button').addEventListener('click', (event) => {
  event.preventDefault()

  const signoutWindow = window.open(
    'https://organization.url/login/signout',
    'okta-signout',
  )

  signoutWindow.close()
  window.location = document.getElementById('logout-button').href

})
