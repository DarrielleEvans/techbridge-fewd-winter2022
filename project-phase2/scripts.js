let valuables= document.getElementByID("tbTextToFind");


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

 //will find the value entered
function findInGrid(input){

    console.log("Book Value ", input);
    let foundinput;
    let foundinputID;

    //grab all the spans by using the classname in common
    let spans = document.getElementsByClassName("column");
    console.log("Spans: ", spans);

     //loop through each span in the collection
    for(let i=0; i < spans.length; i++){
        console.log("Span: ", spans[i]);

        //get the id of the span
        let spanID = spans[i].lastElementChild;
        console.log("spanID: ", spanID);

        //get the inner text of the span
        let spanText = spans[i].innerText;
        console.log("spanText: ", spanText);

        //if the inner text matches the input
        console.log("spanText == inputvalue", spanText == input)
        if(spanText == input){
            spans[i].lastElementChild.style.border = "3px yellow solid";
            

        }



    }
                
            
        

    
} 

//findInGrid("9");

} 


function findInList() {
   //find In List
    console.log("Book Value ", input);
    let foundinput;
    let foundinputID;

    //grab all the spans by using the classname in common
    let spans = document.getElementsByClassName("column");
    console.log("Spans: ", spans);

     //loop through each span in the collection
    for(let i=0; i < spans.length; i++){
        console.log("Span: ", spans[i]);

        //get the id of the span
        let spanID = spans[i].lastElementChild;
        console.log("spanID: ", spanID);

        //get the inner text of the span
        let spanText = spans[i].innerText;
        console.log("spanText: ", spanText);

        //if the inner text matches the input
        console.log("spanText == inputvalue", spanText == input)
        if(spanText == input){
            spans[i].lastElementChild.style.border = "3px yellow solid";
            

        }



    }
                
            
        

    
} 

//findInList("9");




    




function sortIt() {
   let container = document.getElementByClassName("column");
   console.log("Container: ", container);
   let elements = container.childNodes;
   let sortMe = [];
   for (let i=0; i<elements.length; i++) {
    if (!elements[i].id) {
        continue;/* ww  w . d e m  o2 s.  c  o m*/
    }

    sortMe.sort(function(x, y) {
        // remember that the first array element is the number, used for comparison
        return x[0] - y[0];
    });

    for (var i=0; i<sortMe.length; i++) {
        // remember that the second array element contains the element itself
        container.appendChild(sortMe[i][1]);
    }
}

}