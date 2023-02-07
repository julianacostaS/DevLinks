function toggleMode() {
    // get the entire document
    const html = document.documentElement
        // alternate between the dark and light mode
    html.classList.toggle('light')

    // Get the tag img
    const img = document.querySelector('#profile img')

    // then substitute the img tag and store in in a variable
    if (html.classList.contains('light')) {
        // If on light mode, add the profile-light img
        img.setAttribute('src', './assets/profile-light.png')
    } else {
        // If on dark mode, maintain the current img
        img.setAttribute('src', './assets/profile-dark.png')
    }

    // Do the same process to change the alt attribute description
    const alt = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        alt.setAttribute('alt', "Juliana's photo in Sydney")
    } else {
        alt.setAttribute('alt', "Juliana's photo with a harbour in the background")
    }
}