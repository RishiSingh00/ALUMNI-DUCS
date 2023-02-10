const carouse = document.querySelector(".carouse");

const dragging = (e) => {
    carouse.scrollLeft = e.pageX;
}

carouse.addEventListener("mousemove",dragging);