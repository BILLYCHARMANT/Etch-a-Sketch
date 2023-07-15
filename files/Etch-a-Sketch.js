const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    
        cell.addEventListener('mouseenter', function(event) {
          event.target.style.backgroundColor = ` rgb(${255* Math.random()}, ${200* Math.random()}, ${255*Math.random()})`;
        });

        cell.addEventListener('mouseleave', function(event) {
          event.target.style.backgroundColor = '';
        });

        container.appendChild(cell);
      };
  };
function createNewGrid() {
    var squaresPerSide = prompt('Enter the number of squares per side (maximum: 100):');
    squaresPerSide = parseInt(squaresPerSide);

    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
      alert('Invalid input! Please enter a number between 1 and 100.');
      return;
    }

    var container = document.getElementById('container');
    container.innerHTML = '';
    container.style.width = '600px';

    container.style.setProperty('--grid-rows', squaresPerSide);
  container.style.setProperty('--grid-cols', squaresPerSide);

    for (var i = 0; i < (squaresPerSide * squaresPerSide); i++) {
      let square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square).className = "grid-item";

      square.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = ` rgb(${255* Math.random()}, ${200* Math.random()}, ${255*Math.random()})`;
      });

      square.addEventListener('mouseleave', function(event) {
        event.target.style.backgroundColor = '';
      });

      container.appendChild(square);
    }
  }

  var newGridBtn = document.getElementById('new-grid-btn');
  newGridBtn.addEventListener('click', createNewGrid);


  makeRows(16, 16);