document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements
    const mainHeading = document.getElementById('mainHeading');
    const dynamicText = document.getElementById('dynamicText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const toggleElementBtn = document.getElementById('toggleElementBtn');
    const toggleBox = document.getElementById('toggleBox');

    let textToggle = true;
    let styleToggle = true;

    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', () => {
        if (textToggle) {
            dynamicText.textContent = "The text has been changed dynamically by JavaScript! Isn't that cool?";
            mainHeading.textContent = "Text Changed!";
        } else {
            dynamicText.textContent = "This is some initial text. Click the buttons below to see changes!";
            mainHeading.textContent = "Welcome to the Interactive Page!";
        }
        textToggle = !textToggle; // Toggle the state
    });

    // 2. Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', () => {
        if (styleToggle) {
            dynamicText.style.color = '#dc3545'; // Red
            dynamicText.style.fontWeight = 'bold';
            dynamicText.style.fontSize = '1.2em';
            mainHeading.style.color = '#6f42c1'; // Purple
        } else {
            dynamicText.style.color = '#333'; // Default
            dynamicText.style.fontWeight = 'normal';
            dynamicText.style.fontSize = '1.1em';
            mainHeading.style.color = '#007bff'; // Default blue
        }
        styleToggle = !styleToggle; // Toggle the state
    });

    // 3. Add or remove an element when a button is clicked
    toggleElementBtn.addEventListener('click', () => {
        if (toggleBox.style.display === 'none' || toggleBox.style.display === '') {
            toggleBox.style.display = 'block'; // Show the box
            toggleElementBtn.textContent = 'Hide Box';
        } else {
            toggleBox.style.display = 'none'; // Hide the box
            toggleElementBtn.textContent = 'Show Box';
        }
    });

    // Initialize the box as visible
    toggleBox.style.display = 'block';
});