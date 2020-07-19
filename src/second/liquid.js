import useWebAnimations from '@wellyshen/use-web-animations'


const Liquid=(test)=>
{
    const{ref} = useWebAnimations({

        keyframes:[
           { height: '100%'},
           {height: '0'}
          ],
         timing:{
            duration:test
         } 
        
    })
    
   

    return {refer:ref}
}



export default Liquid