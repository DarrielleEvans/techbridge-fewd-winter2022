//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
 //find in grid
  //find in grid
 //I want to get the input from tbTextToFind 
//validate input by making sure the input is not empty
let numberToFind= document.getElementById("tbNumberToFind");
let numberinput=numberToFind.value;
console.log("Book Value ", numberinput);

if(numberinput !=""){
 //grab all the spans by using the classname in common
 let spans = document.getElementsByTagName('span');
 console.log("Spans: ", spans);

  //loop through each span in the collection
 for(let i=0; i < spans.length; i++){
     console.log("Span: ", spans[i]);

//get the id of the span
let spanID = spans[i].id;
console.log("spanID: ", spanID);

//get the inner text of the span
let spanText = spans[i].innerText;
console.log("spanText: ", spanText);

//if the inner text matches the input
console.log("spanText == inputvalue", spanText == numberinput)
    if(spanText == numberinput){
    spans[i].classList.add('spanHighlighted');
    }
 }

}
else{
    alert("Enter A Value!");
}    
}

function findInList() {
    //find In List
     //find In List
     //I want to get the input from tbTextToFind 
     //validate input by making sure the input is not empty
     let txtTextToFind= document.getElementById("tbTextToFind");
     let input=txtTextToFind.value;
     console.log("Book Value ", input);
 
     if(input !=""){
      //grab all the spans 
      let spans = document.getElementsByTagName('span');
      console.log("Spans: ", spans);
  
       //loop through each span in the collection
      for(let i=0; i < spans.length; i++){
          console.log("Span: ", spans[i]);
 
     //get the id of the span
     let spanID = spans[i].id;
     console.log("spanID: ", spanID);
 
     //get the inner text of the span
     let spanText = spans[i].innerText;
     console.log("spanText: ", spanText);
 
     //if the inner text matches the input
     console.log("spanText == inputvalue", spanText == input)
         if(spanText == input){
         spans[i].classList.add('spanHighlighted');
         }
      }
 
     }
     else{
         alert("Enter A Value!");
     }    
 }
 


function sortIt() {
    //
  
      let allSpans = document.getElementsByTagName('span');
       let arrayNumbers = [];

       for (let i = 0; i < allSpans.length; i++) {
         arrayNumbers.push(allSpans[i].innerHTML);
         console.log("Array:", arrayNumbers);
}
            allSpans=arrayNumbers.sort(function(a, b){return a - b});     
    
            console.log("Array2:", arrayNumbers);
    
    
    }
    
