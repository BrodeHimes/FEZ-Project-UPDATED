

var searchUrl = 'data:application/json;charset=utf-8;base64,Ww0KICAgIHsNCiAgICAgICJuYW1lIjogIkFDTUUgU3VwZXIgT3V0Zml0Ig0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiQUNNRSBHcmVhc2UiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJBQ01FIFRyaXBsZSBTdHJlbmd0aCBCYXR0bGVzaGlwIFN0ZWVsIEFybW9yIFBsYXRlIg0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiQUNNRSBCYXRtYW4ncyBPdXRmaXQiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJBQ01FIERlaHlkcmF0ZWQgQm91bGRlcnMiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJSdWJiZXIgQmFuZCINCiAgICB9LA0KICAgIHsNCiAgICAgICJuYW1lIjogIkVhcnRocXVha2UgUGlsbHMiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJBc3BpcmluIg0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiQmlyZCBTZWVkIg0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiSW52aXNpYmxlIFBhaW50Ig0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiSXJvbiBQZWxsZXRzIg0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiRHluYW1pdGUiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJNYWduZXRpYyBHdW4iDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJTdWN0aW9uIEN1cHMiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJCb21iIg0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiQnVuZ2VlIENvcmQiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJHaWFudCBNb3VzZSBUcmFwIg0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiTWF0Y2hlcyINCiAgICB9LA0KICAgIHsNCiAgICAgICJuYW1lIjogIlJvY2tldC1Qb3dlcmVkIFJvbGxlciBTa2F0ZXMiDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJBbnZpbCINCiAgICB9LA0KICAgIHsNCiAgICAgICJuYW1lIjogIkRldG9uYXRvciINCiAgICB9LA0KICAgIHsNCiAgICAgICJuYW1lIjogIk5pdHJvZ2x5Y2VyaW4iDQogICAgfSwNCiAgICB7DQogICAgICAibmFtZSI6ICJHbHVlIg0KICAgIH0sDQogICAgew0KICAgICAgIm5hbWUiOiAiV2VhdGhlciBCYWxsb29uIg0KICAgIH0NCiAgXQ==';

//testing fetch method to retrieve data 

// let arr = [];


// function test() {
// fetch(searchUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     arr.push(...data);
//     console.log(arr[2]);

// });
// }
// console.log(arr);
// test();





let inputBox1 = document.getElementById('myInput');
let val = document.getElementById('myInput').value;
let inputBox2 = document.getElementById('myInput2');
let clickButton = document.getElementsByClassName('button');
let parent = document.getElementsByClassName("autocomplete");



const getWords = async()=>{
  try {
   const response = await fetch(searchUrl);
    if (response.ok){
      const jsonResponse= await response.json();
      // console.log(jsonResponse)
      let arr = jsonResponse.map(item => item.name);
      // console.log(arr);
      return arr; 
    }
  } catch (error){
    console.log(error)
  }
}




const compareWords = (arr) => {
      let val = document.getElementById('myInput').value;
      closeAllLists();
      if (!val){ return false;}
      let a=document.createElement("DIV");
      a.setAttribute("class", "myInput2");
      inputBox1.parentNode.appendChild(a);

      arr.forEach( arr => {
       
          if (arr.substr(0,val.length).toUpperCase() != val.toUpperCase()){ 
         
          
        } else if (arr.substr(0,val.length).toUpperCase() === val.toUpperCase()){ 
           console.log(arr)
           let b=document.createElement("DIV");
           b.innerHTML = "<strong>" + arr.substr(0, val.length) + "</strong>";
           b.innerHTML += arr.substr(val.length);
           a.appendChild(b);
           console.log(a);
          }
      }
    )
}


// "<input type='hidden'"value='" + arr + "'>";
// this value two values wre listed uner b.innerHTML += arr.substr(val.length);. it seems it just makes the div an input feild wit the value of the arr but that is hidden. May be used in other w3 code but not neeed for form so removed. 

function closeAllLists(elmnt){
  var dropDownItems = document.getElementsByClassName("myInput2");
    for (var i = 0; i < dropDownItems.length; i++) {
      if (elmnt != dropDownItems[i] && elmnt != val)
      // used to be && insted of \\ can change back if needed
       {
        dropDownItems[i].parentNode.removeChild(dropDownItems[i]);
      }
    }
  }


const searchFunction = () => {getWords().then(arr => compareWords(arr))};

inputBox1.addEventListener('input',searchFunction);



//closing searchbar when clicked outside
let searchBarArea= document.getElementById("searchBar");
console.log(searchBarArea);


let closeAutocomplete = ()=> {
 
  if(searchBarArea.contains(event.target)){
    console.log('search bar YES clicked');
    } else {
      closeAllLists();
    }
 
}



window.addEventListener('click', closeAutocomplete);



