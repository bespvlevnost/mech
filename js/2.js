let line = document.querySelector('.imgLine')
let btnRight = document.querySelector('.btnRight')
let btnLeft = document.querySelector('.btnLeft')
let txtLine = document.querySelector('.txtLine')
let offset = 0
let offsetTxt = 0


btnRight.addEventListener('click', function(){
    if (line.offsetHeight == 700){
        offset -= 700
        offsetTxt -= 700
        if(offset < -10500 && offsetTxt < -10500){
            offset = 0
            offsetTxt = 0
        }
        txtLine.style.left = offsetTxt+ "px"
        line.style.left = offset+ "px"
    }
    if (line.offsetHeight == 350){
        offset -= 350
        offsetTxt -= 350
        if(offset < -5250 && offsetTxt < -5250){
            offset = 0
            offsetTxt = 0
        }
        txtLine.style.left = offsetTxt+ "px"
        line.style.left = offset+ "px"
    }
})

btnLeft.addEventListener('click', function(){
    if (line.offsetHeight == 700){
        offset += 700
        offsetTxt += 700
        if(offset > 0 && offsetTxt > 0){
            offset = -10500
            offsetTxt = -10500
        }
        txtLine.style.left = offsetTxt+ "px"
        line.style.left = offset+ "px"
    }
    if (line.offsetHeight == 350){
        offset += 350
        offsetTxt += 350
        if(offset > 0 && offsetTxt > 0){
        offset = -5250
        offsetTxt = -5250
    }
    txtLine.style.left = offsetTxt+ "px"
    line.style.left = offset+ "px"
    }
})