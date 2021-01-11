window.onload = function () {
    const header = document.getElementById("header")
    const hamburger = document.getElementById("hamburger-menu-container")
    const navSmall  = document.getElementById("navbar-small")
    
    var lastScrollTop = 0

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            hamburger.classList.remove("hamburger-menu-container-open")
            hamburger.classList.add("hamburger-menu-container")
            navSmall.classList.remove("navbar-small-open")
            navSmall.classList.add("divider-out")
            setTimeout(() => {
                header.style.top = "-100px"
            }, 300)
            
        }else {
            header.style.top = "0"
        }
        lastScrollTop = scrollTop
    })
}