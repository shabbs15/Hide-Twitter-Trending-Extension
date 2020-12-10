console.log("timo")

function getElement(){
  console.log("it is happening")
   var elements = document.querySelectorAll('[aria-label="Timeline: Trending now"]');

  if (elements.length == 0){
    queryLoop()
  }
  else {
    while(elements.length > 0){
        console.log("removeal","ghello")
        elements[0].parentNode.removeChild(elements[0]);
        break
    }
  }

}


function queryLoop(){
  setTimeout(getElement, 500)
}



document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        console.log("completed")
        queryLoop()
        //setTimeout(runFunction,3999);
    }
}




console.log("bob")
