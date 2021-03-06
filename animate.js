
// ------------------------------------------------------------------------------ //
                            // Uncomment any one of the arrays below 
// ------------------------------------------------------------------------------ //

// arrow icons animation
//const icons = ['f105', 'f101'];

// car crash animation
const icons = ['f1b9', 'f5de', 'f5e1'];

// call the animation function
animate(icons);



// ------------------------------------------------------------------------------ //
                            // UTILITY code ahead
// ------------------------------------------------------------------------------ //

/**
 * Takes an array of icons and animates them sequentially
 * @param {string[]} iconsList 
 */
function animate(iconsList) {
    if(!Array.isArray(iconsList) || iconsList.length === 0) {
        return;
    }

    // Font Awesome icon prefix
    let iconPrefix = '&#x';

    // The element where the icons will be projected
    let portal = document.getElementById('portal'); 
    
    // Holds the index of icon currently being displayed
    let currentIconIndex = 0;

    // Display the first icon
    portal.innerHTML = iconPrefix + iconsList[currentIconIndex];

    setInterval(() => {
        currentIconIndex++;

        if (currentIconIndex === iconsList.length) {
            // reset the index
            currentIconIndex = 0;

            // change color
            portal.className = 'fas ' + getRandomColorClass();
        }

        portal.innerHTML = iconPrefix + iconsList[currentIconIndex];
        
    }, 1000);
}

// TailwindCSS colors list
const colors = ['grey', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

// Variant of the color
const colorVariants = ['darkest', 'darker', 'dark', 'base', 'light', 'lighter', 'lightest'];

/**
 * Returns a random color class from tailwindCSS
 */
function getRandomColorClass() {
    let color = getRandomElement(colors);
    let variant = getRandomElement(colorVariants);

    return `text-${color}-${variant}`;
}

/**
 * Returns a random element from an array
 * @param {string[]} array The actual array
 */
function getRandomElement(array) {
    if(!Array.isArray(array) || array.length === 0) {
        return;
    }
    return array[Math.floor(Math.random() * array.length)];
}
