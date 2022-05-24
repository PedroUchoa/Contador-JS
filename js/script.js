let contador = 0;
const value = document.getElementById("valor");
const paragraph = document.getElementById('paragraph');

document.getElementById("menor").addEventListener('click', ()=>{
    if(value.innerHTML > "0"){
        contador--;
        value.innerHTML = contador;
        paragraph.classList.add('display')
    }
})

document.getElementById('maior').addEventListener('click',()=>{
    if(value.innerHTML <= 9){
        contador++;
        value.innerHTML = contador;
    }else{
        paragraph.classList.remove('display');
    }
})

