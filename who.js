let worde = document.querySelectorAll(".word");

const animateAll = (animate) => {
    setTimeout(() => {
        animate(worde[0]);
        setTimeout(() => {
            animate(worde[1]);
        }, 1000)
    }, 1000)
}

const animate = (worde) => {
    worde.classList.add("animate");
}