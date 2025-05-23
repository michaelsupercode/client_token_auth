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
  const registerUrl = "https://backend-token-auth.onrender.com/"
  const registrationBody = { firstname, lastname, email, password }
  const result = await postData(registerUrl, registrationBody)
  return result
}

export async function postLoginUser({ email, password }) {
  const url = "https://backend-token-auth.onrender.com/"
  const body = { email, password }
  const result = await postData(url, body)
  return result
}

export async function getAllUsers({ token }) {
  const url = "https://backend-token-auth.onrender.com/"
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
