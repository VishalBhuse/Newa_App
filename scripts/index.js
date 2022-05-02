// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page




import {showres,getdata1} from "../components/all.js";

let res = document.querySelector("#sidebar").children;
  for(let el of res){
    el.addEventListener('click',showres);
  }


document.getElementById("search_input").addEventListener('keyup',getdata1);

var datas = JSON.parse(localStorage.getItem("news")) || [];
console.log('datas:', datas)

//  datas.forEach((el) =>{
 let div = document.createElement("div");
 div.setAttribute("class",'localstore')
 let img = document.createElement("img");
 let p = document.createElement('p');
 let h3 = document.createElement('h3');
 img.src = datas.urlToImage; 
h3.innerText = datas.title;
p.innerText=datas.description;  

  div.append(img,h3,p)

    document.querySelector('#detailed_news').append(div)