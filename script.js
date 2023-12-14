const wordIn=document.querySelector("#word");
const  submitButton=document.querySelector("#submit");
const wordOut=document.querySelector("#wordList");
const checkButton=document.querySelector("#check");


var words = [];
const checkList = ["Produce", "Bread", "Dairy", "Meat", "Seafood", "Drinks", "Deli", "Frozen"];
var wordCount = 0;
var crossListed = 0;

const addWord = () => {
    words.push(wordIn.value);
    wordCount = words.length;
    createList(words);
    displayCount(wordCount);
}

const createList = (items) => {
    wordOut.innerHTML = "";


for (var i = 0; i < items.length; i++){
    wordOut.innerHTML += "<li>" + items[i] +"</li>"
}
}

const displayCount =(wc)=> {
    document.querySelector("#wordCount").innerHTML=wc;
    if(wc==10){
        wordIn.setAttribute("disabled", true);
        submitButton.setAttribute("disabled",true);
    }
}


const checkWords=()=>{
    for(let word of words){
        if(checkList.includes(word)){
            crossListed += 1
        }
    }
    console.log(crossListed);
}
submitButton.addEventListener("click",addWord);
checkButton.addEventListener("click",checkWords);