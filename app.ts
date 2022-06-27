const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;
const bt = document.getElementById('button')

function soma(numero1: number, numero2: number){
    return numero1 = numero2
}
if (bt) {
    if(input1 && input2){
        bt.addEventListener('click', () => {
            console.log(soma(Number(input1.value), Number(input2.value)))
        })
    }
}
