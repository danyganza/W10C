//give function a name
function redness(details) {
    details[`target`][`style`][`backgroundColor`] = `red`;
    details[`target`][`style`][`fontSize`] = `3.5rem`;
}
// Add a keydown event listener to the document
let header = document.getElementById('page_header');
header.addEventListener('click', redness);


function background(event) {
  event[`target`]['style'][`backgroundColor`] = 'lightblue';
}

// Add a keydown event listener to the document
document.addEventListener('keydown', (event) => {
  // Check if the space key was pressed
  if (event.code === 'Space') {
    // Call the background function
    background(event);
  }
});

// function to change the image style when the user hovers over it to blur
function hoover(event) {
  event[`target`][`style`][`opacity`] = '0.3';
}

// Get all the images on the page
let images = document.querySelectorAll('img');

// Add an event listener to each image
images.forEach(image => {
  image.addEventListener('mouseover', hoover);
});




// function to Change the font size of the paragraph when it is double clicked
function design (event){
  event[`target`][`style`][`fontSize`] = '24px'; 
  event[`target`][`style`][`backgroundColor`]= `blue`
}
// Get the p tag
let p = document.getElementById('p');

// Add an event listener to the paragraph
p.addEventListener('dblclick', design);
  



