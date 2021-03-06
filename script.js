const columns = document.querySelectorAll(".column");
const displayCurrentPlayer = document.getElementById("current-player");

let yellowsTurn = true;
 
columns.forEach((column) => {
    column.addEventListener("click", () => {
      for (let index = 5; index >= 0; index--) {
        const element = column.children[index];

        if (element.classList.contains("yellows-turn") || element.classList.contains("reds-turn")) {
          continue;
        } else if (yellowsTurn === true) {
          element.classList.add("yellows-turn") +
          (displayCurrentPlayer.innerHTML = "Reds turn"); 
          break;
        } else if (yellowsTurn === false) {
          element.classList.add("reds-turn") +
          (displayCurrentPlayer.innerHTML = "Yellows turn");
          break;
        } 
      };

      //column check
      let i = 0;
  
      for (let i = 0; i < 3; i++) {

        if (
          column.children[i].classList.contains("yellows-turn") &&
          column.children[i + 1].classList.contains("yellows-turn") && 
          column.children[i + 2].classList.contains("yellows-turn") && 
          column.children[i + 3].classList.contains("yellows-turn")
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