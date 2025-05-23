async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
    return response.json(); 
}
  

export async function postRegisterUser({ firstname, lastname, email, password }) {
  const registerUrl = "http://localhost:9031/api/users/register"
  const registrationBody = { firstname, lastname, email, password }
  const result = await postData(registerUrl, registrationBody)
  return result
}

export async function postLoginUser({ email, password }) {
  const url = "http://localhost:9031/api/users/login"
  const body = { email, password }
  const result = await postData(url, body)
  return result
}

export async function getAllUsers({ token }) {
  const url = "http://localhost:9031/api/users"
  const response = await fetch(url, { 
    method: "GET",
    mode: 'cors', 
    headers: { 
      'Content-Type': 'application/json',
      token: token,
    } 
  })
  return response.json()
}