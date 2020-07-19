import useWebAnimations from '@wellyshen/use-web-animations'
import {valuegetter} from './valueGetter'

const Rqeen = (state) => {
    let int;
    const {ref,getAnimation} = useWebAnimations({
        keyframes: [
            {
                transform: 'translate(0,0)'
            }, {
                transform: 'translate(0,-100%)'
            }
        ],
        timing: {

            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 800,
            playbackRate: 1,
            iterations: Infinity
        }
    });
    let anime;
    
    if(state>0){
        anime= getAnimation()
        anime.playbackRate*=1.1
        
           valuegetter(anime.playbackRate)

          int= setTimeout(() => {
            if(anime.playbackRate>1)
            {
                anime.playbackRate /=1.2;
                
            }
           }, 10000);
    }
    
    
   


    
        


   
    
    return ({value:ref,inter:int})
}

export default Rqeen