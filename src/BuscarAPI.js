import { RenderUsers } from "./RenderUsers";

const url = "https://api.github.com/search/users?q=";
const loginUrl = "https://api.github.com/users/";
let userResults = [];

export async function BuscarAPI(user) {
  let resultado=[];
  // console.log("buscaraapi");
  try {
    const response = await fetch(url + user + "+in:login");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const users = data.items;
    const userSearch = users.slice(0, 3);
    // console.log(userSearch);
    // console.log("espera 1");
    for (let i = 0; i < userSearch.length; i++) {
      const element = userSearch[i];
      // console.log(element);
      resultado.push(await searchLogin(element))
      // console.log(resultado);
    }
    // console.log("espera 2");
    // console.log(resultado);
    return resultado;
  } catch (error) {}
}

async function searchLogin(userLogin) {
  try {
    
    const response = await fetch(loginUrl + userLogin.login);
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    // console.log("errrrrrrrrr");
    console.log(error);
  }
}
