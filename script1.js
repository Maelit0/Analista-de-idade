function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Vefique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','Menino.png')
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute('src','jovemM.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Adulto.png')
            }else{
                //Idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //Criança  
                img.setAttribute('src','Menina.png')
            } else if (idade < 21) {
                //Jovem 
                img.setAttribute('src','Mjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','Adulta.png')
            }else{
                //Idoso
                img.setAttribute('src','Idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }





}