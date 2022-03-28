let n = 1

function Carrossel(){
    if(n === 1){
        $('#imgCarrossel1').show()
        $('#imgCarrossel3').hide()
        n+=1
    }else if(n === 2){
        $('#imgCarrossel1').hide()
        $('#imgCarrossel2').show()
        n+=1
    }else if(n === 3){
        $('#imgCarrossel2').hide()
        $('#imgCarrossel3').show()
        n = 1
    }
}

setInterval(Carrossel, 1500)