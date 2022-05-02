// Ude Import export (MANDATORY)

import {showres,getdata2} from "../components/all.js";


document.getElementById("search_input").addEventListener('keyup',getdata2);


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