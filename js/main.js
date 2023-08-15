const btnDarkMode = document.querySelector(".dark-mode-btn");



// 1. checking the dark theme in system settings 
if (window.matchMedia && window.matchMedia("(prefers-color-schame: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark")
}


// 2. checking the dark theme in localStorage
if(localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark")
} else if(localStorage.getItem('darkMode') === 'light'){
    btnDarkMode.classList.remove("dark-mode-btn--active")
    document.body.classList.remove("dark")
}

//checking the dark theme in system settings 
if (window.matchMedia && window.matchMedia("(prefers-color-schame: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark")
}


//if the system settings change, then the theme changes

window.matchMedia("(prefers-color-schame: dark)").addEventListener('change', (event) => {
    const newColorSchame = event.matches ? "dark" : "light";
    if(newColorSchame==='dark'){
        btnDarkMode.classList.add("dark-mode-btn--active")
        document.body.classList.add("dark")
        localStorage.setItem('darkMode', 'dark')
    }else{
        btnDarkMode.classList.remove("dark-mode-btn--active")
        document.body.classList.remove("dark")
        localStorage.setItem('darkMode', 'light')
    }
})


// turning on the night mode by button
btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active")

   const isDark =  document.body.classList.toggle('dark')


    if(isDark){
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }

}