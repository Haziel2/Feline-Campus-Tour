// Get references to the HTML elements
var circle = document.getElementById("circle"); // Reference to the circular element
var upBtn = document.getElementById("upBtn"); // Reference to the "Up" button
var downBtn = document.getElementById("downBtn"); // Reference to the "Down" button

// Initialize rotation variables
var rotateValue = circle.style.transform; // Get the initial transform value
var rotateSum; // Variable to store the updated transform value

// Add a click event listener to the "Up" button
upBtn.onclick = function() {
    // Calculate the new transform value for clockwise rotation
    rotateSum = rotateValue + "rotate(-90deg)";
    
    // Apply the updated transform value to the circular element
    circle.style.transform = rotateSum;
    
    // Update the current rotation value
    rotateValue = rotateSum;
}

// Add a click event listener to the "Down" button
downBtn.onclick = function() {
    // Calculate the new transform value for counterclockwise rotation
    rotateSum = rotateValue + "rotate(90deg)";
    
    // Apply the updated transform value to the circular element
    circle.style.transform = rotateSum;
    
    // Update the current rotation value
    rotateValue = rotateSum;
}
