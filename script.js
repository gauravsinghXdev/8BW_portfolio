const left = document.getElementById("left-side");
const handleOnMove =  e => {
    const p = e.clientX 
    left.style.width = `${p}px`;
}

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);



