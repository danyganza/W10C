//give function a name
function redness(details) {
    details[`target`][`style`][`backgroundColor`] = `red`;
}
// Add a keydown event listener to the document
let header = document.getElementById('page_header');
header.addEventListener('click', redness);




// Add a keydown event listener to the document
document.addEventListener('keydown', function (space) {
    // Check if the space key was pressed
    if (space.code === 'Space') {
        // Change the background color of the page to lightblue
        document.body.style.backgroundColor = 'lightblue';
    }
});


// Get all the images on the page
const images = document.querySelectorAll('img');

// Add an event listener to each image
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    // Change the image style when the user hovers over it to blur
    image.style.opacity = '0.3'; 
  });
});

// Get the p tag
const p = document.getElementById('p');

// Add an event listener to the paragraph
p.addEventListener('dblclick', () => {
  // Change the font size of the paragraph when it is double clicked
  p.style.fontSize = '24px'; // Example size change
  p.style.backgroundColor= `maroon`
});

