

const reveal = () => {
    let reveals = document.querySelectorAll('.reveal');
    for(let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

const showSideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex'
}

const removeSideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none'
}