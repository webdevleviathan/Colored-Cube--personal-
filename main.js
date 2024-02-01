// Create the main cube container
var cubeContainer = document.createElement('div');
cubeContainer.classList.add('cube');

// Function to create a face with squares
function createFace(className, start, end) {
  var face = document.createElement('div');
  face.classList.add('face', className);

  for (var i = start; i <= end; i++) {
    var square = document.createElement('div');
    square.classList.add('square');
    square.textContent = i;
    face.appendChild(square);
  }

  return face;
}

// Append each face to the cube container
cubeContainer.appendChild(createFace('front', 1, 9));
cubeContainer.appendChild(createFace('back', 10, 18));
cubeContainer.appendChild(createFace('left', 19, 27));
cubeContainer.appendChild(createFace('right', 28, 36));
cubeContainer.appendChild(createFace('top', 37, 45));
cubeContainer.appendChild(createFace('bottom', 46, 54));

// Append the cube container to the document body
document.body.appendChild(cubeContainer);

let faces = document.getElementsByClassName('face');

for (let i = 0; i < faces.length; i++) {
  faces[i].addEventListener('mouseover', runEvent);
}

function runEvent(e) {
  e.target.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}
