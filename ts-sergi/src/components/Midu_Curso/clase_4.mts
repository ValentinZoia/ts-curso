//fetching de datos

import { GithubAPI } from "./clase_4Types";

const API_URl = "https://api.github.com/search/repositories?q=javascript";

const response = await fetch(API_URl);

if(!response.ok){
    throw new Error(`Request failed with status ${response.status}`);


}

const data = await response.json() as GithubAPI;

const repos = data.items.map(repo =>{
    return repo.id
})

console.log(repos)