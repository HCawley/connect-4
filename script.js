const columns = document.querySelectorAll(".column");
const displayCurrentPlayer = document.getElementById("current-player");

let yellowsTurn = true;
 
columns.forEach((column) => {
    column.addEventListener("click", () => {
    //loop through all circles below clicked column, bottom to top.
      for (let index = 5; index >= 0; index--) {
        const element = column.children[index];
      //on click, check all circles below if include yellow/red
      //if not, change colour on bottom available circle
        if (element.classList.contains("yellows-turn") || element.classList.contains("reds-turn")) {
          continue; // Loop specific keyword for go to next loop
        } else if (yellowsTurn === true) { //if it is yellows turn
          element.classList.add("yellows-turn") + //add yellow circle to clicked column
          (displayCurrentPlayer.innerHTML = "Reds turn"); 
          break;
        } else if (yellowsTurn === false) { //if it is reds turn
          element.classList.add("reds-turn") +
          (displayCurrentPlayer.innerHTML = "Yellows turn"); //add red circle to clicked column
          break; // Loop specific keyword for kill the loop
        } 
      };

      //column check
      let i = 0;
      //loop through 3 circles above and 3 cirlces below to check for 4 same colour
      for (let i = 0; i < 3; i++) {

        if (
          column.children[i].classList.contains("yellows-turn") && //if the bottom circle is yellow
          column.children[i + 1].classList.contains("yellows-turn") && // if the bottom circle and the first circle is yellow
          column.children[i + 2].classList.contains("yellows-turn") && // if the bottom circle and first 2 circles are yellow
          column.children[i + 3].classList.contains("yellows-turn") // if the bottom circle and next 3 circles are yellow
        ) { 
          setTimeout(function() 
          {alert("Yellow wins!"); }, 500);
        } else if (
          column.children[i].classList.contains("reds-turn") && 
          column.children[i + 1].classList.contains("reds-turn") &&
          column.children[i + 2].classList.contains("reds-turn") &&
          column.children[i + 3].classList.contains("reds-turn")
        ) {
          setTimeout(function() 
          {alert("Red wins!"); }, 500);
        } 
      };

      //row check
    for (let i = 0; i < 6; i++) {
      const row = document.querySelectorAll(".row-" + i);
      
      for (let j = 0; j < 3; j++) {
        
        // console.log("i: ", i, "j: ", j)
        if (
          row[j].classList.contains("yellows-turn") && 
          row[j + 1].classList.contains("yellows-turn") &&
          row[j + 2].classList.contains("yellows-turn") &&
          row[j + 3].classList.contains("yellows-turn")
        ) { 
          setTimeout(function() 
          {alert("Yellow wins!"); }, 500);
        } 
      else if (
          row[j].classList.contains("reds-turn") && 
          row[j + 1].classList.contains("reds-turn") &&
          row[j + 2].classList.contains("reds-turn") &&
          row[j + 3].classList.contains("reds-turn")
        ) {
          setTimeout(function() 
          {alert("Red wins!"); }, 500);
      };
    }
    };

    //diagonal check to the right
    //diagonal check to the left
    const row = document.querySelectorAll(".row"); 
    for (let i = 0; i < 42; i++) { 
    
      if (
      row[i + 15] && 
      row[i].classList.contains("yellows-turn") &&
      row[i + 5].classList.contains("yellows-turn") &&
      row[i + 10].classList.contains("yellows-turn") &&
      row[i + 15].classList.contains("yellows-turn")
       ) {
        setTimeout(function() 
        {alert("Yellow wins!"); }, 500);
      } 
      else if (
        row[i + 15] && 
        row[i].classList.contains("reds-turn") &&
        row[i + 5].classList.contains("reds-turn") &&
        row[i + 10].classList.contains("reds-turn") &&
        row[i + 15].classList.contains("reds-turn")
        ) {
          setTimeout(function() 
          {alert("Red wins!"); }, 500);
          } 
      else if (
        row[i - 21] && 
        row[i].classList.contains("yellows-turn") &&
        row[i - 7].classList.contains("yellows-turn") &&
        row[i - 14].classList.contains("yellows-turn") &&
        row[i - 21].classList.contains("yellows-turn")
        ) {
          setTimeout(function() 
          {alert("Yellow wins!"); }, 500);
          } 
      else if (
        row[i - 21] && 
        row[i].classList.contains("reds-turn") &&
        row[i - 7].classList.contains("reds-turn") &&
        row[i - 14].classList.contains("reds-turn") &&
        row[i - 21].classList.contains("reds-turn")
        ) {
          setTimeout(function() 
          {alert("Red wins!"); }, 500);
          }  
    };
    yellowsTurn = !yellowsTurn; 
});
document.querySelector("#reset").addEventListener("click", () => {
  location.reload()

})
});