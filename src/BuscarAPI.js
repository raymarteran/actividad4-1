const url = "https://api.github.com/search/users?q=";
const loginUrl = "https://api.github.com/users/";
let userResults = [];

export async function BuscarAPI(user) {
  let resultado=[];
  try {
    const response = await fetch(url + user + "+in:login");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const users = data.items;
    const userSearch = users.slice(0, 3);
    for (let i = 0; i < userSearch.length; i++) {
      const element = userSearch[i];
      resultado.push(await searchLogin(element))
    }
    return resultado;
  } catch (error) {}
}

async function searchLogin(userLogin) {
  try {
    
    const response = await fetch(loginUrl + userLogin.login);
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
}
