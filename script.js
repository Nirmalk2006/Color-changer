const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');
boxes.forEach(function(box) {
    console.log(box);
    box.addEventListener('click', function(e) {
      console.log(e);
      if (e.target.id === 'grey') {
        const clickedid = e.target.id;
        body.style.backgroundColor = clickedid;
      }
      if(e.target.id === 'white'){
        const clickid = e.target.id;
      body.style.backgroundcolor = clickedid;
      }
      if(e.target.id === 'yellow'){
        const clickid = e.target.id;
        body.style.backgroundColor = clickid;
      }
      if(e.target.id === 'blue'){ 
        const clickid = e.target.id;  
        body.style.backgroundColor = clickid;
      }
    });
})