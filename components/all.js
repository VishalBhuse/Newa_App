// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


  function showres(){
    console.log(this.id);
    getdata(this.id);
  }

const getdata1 =async (e) =>{
    if(e.key==="Enter"){

      let query = document.querySelector("#search_input").value;
      try{
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        const data =await res.json();
        console.log('data:', data.articles);      
        appendata(data.articles)      
      }
      catch(err){
        console.log('err:', err)
        
      }
    }
  }

  const getdata2 =async (e) =>{
    if(e.key==="Enter"){

      let query = document.querySelector("#search_input").value;
      try{
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        const data =await res.json();
        console.log('data:', data.articles);      
        appendata2(data.articles)      
      }
      catch(err){
        console.log('err:', err)
        
      }
    }
  }

const getdata =async (query) =>{
    try{
      //  query = document.getElementById("in").value;
      const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`);
      const data =await res.json();
      console.log('data:', data.articles);

      appendata(data.articles)

    }
    catch(err){
      console.log('err:', err)

    }
  }

  const appendata= (data) =>{

     document.querySelector('#results').innerHTML=null;

    data.forEach((el)=>{

      let div = document.createElement('div');
      let div2 = document.createElement('div');
      div.setAttribute('class','second')
      let img = document.createElement('img');
      let p = document.createElement('p');
      let h3 = document.createElement('h3');

      h3.innerText = el.title;
      p.innerText=el.description;
      img.src = el.urlToImage;

      div2.append(h3,p);
      div.append(img,div2);
      div.addEventListener("click",function(){
        gotopage(el)
      })
       document.querySelector('#results').append(div);
    })

  }
  
  const appendata2= (data) =>{

    document.querySelector('#detailed_news').innerHTML=null;

   data.forEach((el)=>{

     let div = document.createElement('div');
     let div2 = document.createElement('div');
     div.setAttribute('class','second')
     let img = document.createElement('img');
     let p = document.createElement('p');
     let h3 = document.createElement('h3');

     h3.innerText = el.title;
     p.innerText=el.description;
     img.src = el.urlToImage;

     div2.append(h3,p);
     div.append(img,div2);
    
   document.querySelector('#detailed_news').append(div)
   })

 }

  function gotopage(el){
    console.log('el:', el);
    
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href="news.html";
    
    }

    // let datas = JSON.parse(localStorage.getItem("news"));
    // datas.forEach((el)=>{

    //     let div = document.createElement('div');
    //     // div.setAttribute('class','second')
    //     let img = document.createElement('img');
    //     let p = document.createElement('p');
    //     let h3 = document.createElement('h3');
        
    //     h3.innerText = el.title;
    //     p.innerText=el.description;
    //     img.src = el.urlToImage;
        
    //     div.append(img,div2);
    //     div.addEventListener("click",function(){
    //       gotopage(el)
    //     })
    //     document.querySelector('#detailed_news').append(div)
    //     })


  export {showres,getdata1,getdata2}