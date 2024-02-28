import Olonade from "./mainindex.js"

const yusufoy = new Olonade(
    "O01",
    "Yusuf Olonade",
    35 + " years",
    "first born",
    "osun state, Nigeria",
    "brown",
    "married",
    1,
    1,
    "september 2, 2018",
)

const tbal = new Olonade(
    "O02",
    "Oluwatoyin Olonade",
    33 + " years",
    "second born",
    "ibadan, Nigeria",
    "light yellowish-brown",
    "married",
    1,
    "none",
    "january 6, 2023",

)

const ib = new Olonade(
    "O03",
    "Ibrahim Olonade",
    31 + " years",
    "Third born",
    "lagos, Nigeria",
    "light brown",
    "married",
    1,
    1,
    "october 21, 2019",
)

const salam = new Olonade(
    "O04",
    "Abdulsalam Olonade",
    25 + " years",
    "last of four",
    "Famagusta Cyprus",
    "light yellowish-brown",
    "single",
    "none",
    "none",
    undefined
)

const targetArr = [yusufoy, tbal, ib, salam];
const form = document.getElementById('formspace');
const result = document.getElementById('result');
form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputElement = document.getElementById('myInput').value
    for (let i =0; i<targetArr.length; i++){
        const element = targetArr[i];
        const elementName = element.name
        if(elementName.toLowerCase() === inputElement.toLowerCase()){
            result.innerHTML= 
            `
               <ul>
                   <li><span class ="listspan">Name:</span> ${element.name}</li>
                   <li><span class ="listspan">Age:</span> ${element.age}</li>
                   <li><span class ="listspan">Position:</span> ${element.position}</li>
                   <li><span class ="listspan">complexion:</span> ${element.skinColor}</li> 
                   <li><span class ="listspan">Current Location:</span> ${element.location}</li>
                   <li><span class ="listspan">Marital Status:</span> ${element.maritalStatus}</li>
                   <li><span class ="listspan">Children:</span> ${element.newChildren()}</li>
                   <li><span class ="listspan">Date married:</span> ${element.dateMarried}</li>
               </ul>               
            `
        ;
        return;
        }
    }
    result.textContent = "No matching information found"
})
//console.log(tbal.totalMarriedDays())
//console.log(salam)
//console.log("married for :", salam.totalMarriedDays() + " years")