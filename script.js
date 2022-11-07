
    const toggleSlide = () => {
        const hambugerMenu = document.querySelector('.hambuger-menu')
        const mobileNav = document.querySelector('.navlinks')
        
        hambugerMenu.addEventListener('click' , ()=>{
            mobileNav.classList.toggle('nav-active')
            console.log("i was clicked")
            
        })
    }
    toggleSlide()

    window.addEventListener("scroll",() => {
       const navbar =  document.querySelector('.navbar')
        navbar.classList.toggle('sticky',window.scrollY > 0);
    })
