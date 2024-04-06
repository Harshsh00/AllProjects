const boxes = document.querySelectorAll(".boxes");
const body = document.querySelector("body");

boxes.forEach(function (box) {
  console.log(box);
  box.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    // if(e.target === red){
    //     body.style.backgroundColor= e.target.id;
    // }
    // if(e.target === blue){
    //     body.style.backgroundColor= e.target.id;
    // }
    // if(e.target === yellow){
    //     body.style.backgroundColor= e.target.id;
    // }
    // if(e.target === grey){
    //     body.style.backgroundColor= e.target.id;
    // }

    // Switch case

    switch (e.target.id) {

        case 'red':
        body.style.backgroundColor = e.target.id;
        break;
        case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
        case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
        case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      
    }
    

  });
});
