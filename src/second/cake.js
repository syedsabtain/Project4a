import useWebAnimations from '@wellyshen/use-web-animations'


const Cake=()=>
{

    const{ref} = useWebAnimations({

        keyframes:[
            { transform: 'translateY(0) scale(1, 1) rotate(0)', easing: 'ease-in' },
            { transform: 'translateY(0) scale(1.1, .9) rotate(0)' },
            { transform: 'translateY(-10%) scale(.9, 1.1) rotate(0)', offset: .4 },
            { transform: 'translateY(-10%) scale(1, 1) rotate(10deg)', offset: .5 },
            { transform: 'translateY(-10%) scale(1, 1) rotate(-10deg)', offset: .7 },
            { transform: 'translateY(-10%) scale(1,1) rotate(0deg)', offset: .8, easing: 'ease-in' },
            { transform: 'translateY(0) scale(1, 1) rotate(0)' }
          ],
         timing:{
            id: 'bounce', delay: 7000, duration: 2000, iterations: 2 
         } 
        
    })

    return ref
}



export default Cake