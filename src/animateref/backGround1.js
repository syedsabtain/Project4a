import useWebAnimations from '@wellyshen/use-web-animations'
import {value1} from './valueGetter'
import { useState } from 'react'

const Bground = ()=>
{
    let [tim,setTim] = useState(10000);
    const val = 1000;
    const {ref,getAnimation} = useWebAnimations({
        
        keyframes:[
            {transform:'translate(100%,0)'},
            {transform:'translate(-100%,0)'}
        ],

        timing:{
            duration: 36000,
            iterations:Infinity
        }

    })
    
    const Runit=()=>{
        getAnimation().playbackRate= value1 /2;
        setTimeout(() => {
            if(getAnimation().playbackRate>1)
            {
                getAnimation().playbackRate /=1.1 ;
                setTim(tim+val)
            }
           }, tim);
          }

    if(value1>1.1)
    {
        if (value1 > 1.2) {
              Runit();
        }
           else {
            
              getAnimation().playbackRate = 0;    
            }
          
    }
    return ref
}

export default Bground