let line = document.querySelector('.imgLine')
let btnRight = document.querySelector('.btnRight')
let btnLeft = document.querySelector('.btnLeft')
let offset = 0

btnRight.addEventListener('click', function(){
    if (line.offsetHeight == 700){
        offset -= 700
    console.log(offset);
    if(offset < -2800){
        offset = 0
    }
    line.style.left = offset+ "px"
    }
    if (line.offsetHeight == 350){
        offset -= 350
    console.log(offset);
    if(offset < -1400){
        offset = 0
    }
    line.style.left = offset+ "px"
    }
})

btnLeft.addEventListener('click', function(){
    if (line.offsetHeight == 700){
        offset += 700
        console.log(offset);
        if(offset > 0){
            offset = -2800
        }
        line.style.left = offset+ "px"
    }
    if (line.offsetHeight == 350){
        offset += 350
        console.log(offset);
        if(offset > 0){
        offset = -1400
    }
    line.style.left = offset+ "px"
    }
})