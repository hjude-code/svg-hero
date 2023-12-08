const block = document.querySelector('.wp-block-hjude-svg-hero');

const elmnt = document.querySelector('.elmnt');

window.addEventListener('mousemove', (m)=>{
    elmnt.setAttribute('x', m.x);
    elmnt.setAttribute('y', m.y);

    percentX = m.x/window.innerWidth
    percentY = m.y/window.innerHeight

    let rot = (percentX + percentY)/2;
    console.log(percentX);
    elmnt.style.transform = `translate(-50%, -50%) rotate(${rot*360*2}deg)`;

})

console.log('test')

