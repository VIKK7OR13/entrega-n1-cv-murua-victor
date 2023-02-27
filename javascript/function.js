function myFunction() {
    alert('Gracias por visitar mi cv')  
}

addEventListener('DOMContentLoaded',()=>{

    const boton_ir_arriba = document.querySelector('#ir_arriba_boton')
    const barra_indicador = document.querySelector(".indicador_scroll")

    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop
    const irArriba = ()=>{
        if (obtener_pixeles_inicio()>0){
            requestAnimationFrame(irArriba)
            scrollTo(0,obtener_pixeles_inicio()- (obtener_pixeles_inicio()/ 20 ))
        }
    }
    boton_ir_arriba.addEventListener('click', irArriba)
})

