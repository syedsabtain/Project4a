import React, { useRef, useState } from 'react'

import './second.css'
import alic from './alicedrink2.png'
import useWebAnimations from '@wellyshen/use-web-animations'
import Cake from './cakeComp'
import Bottle from './bottleComp'
import Liquid from './liquidComp'
import Alicered from '../animateref/aliceRed'

const Secondanimation = () => {


    let[count,setCount] = useState(0)
    let[test,setTest] = useState()
    const {ref, getAnimation} = useWebAnimations({

        keyframes: [

          { transform: 'translate(-50%, -50%) scale(.5)' },
          { transform: 'translate(-50%, -50%) scale(1.5)' }   
        ],
        timing: {

          duration: 8000, 
          easing: 'ease-in-out', 
          fill: 'both'
        }
    });

    

    const shrinking = () => {
        
        if(count===0){
        setCount(1)
        getAnimation().playbackRate=-1;
        setTest(getAnimation().effect.getTiming().duration/2)
        getAnimation().play();
        }

        
    };
    const growing=()=>
    {
      if(count===1){
      setCount(0)
      
      getAnimation().playbackRate=1;
      getAnimation().play()
      }      
    }



    let cake = useRef(null)
    cake = Cake();
    let bottle = useRef(null)
    bottle = Bottle()
    let liquid = useRef(null)
    liquid= Liquid(test).refer

    return (
        <div>
        <div className='wrapper1'>
          <h3 href='/' className='btn btn-primary'>Scroll Down to view RedQueen</h3>
            <div className='alice' ref={ref} >
                <img srcSet={alic} alt=""/>
            </div>
            <div className="table-set">
                <img alt='table'
                    className="table"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/table.png"/>
                <div className="drink-me" onClick={shrinking}>
                    <img alt='doily'
                        className="doily"
                        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/doily_small.png"
                     />
                    <div id="bottle" ref={bottle}>
                        <div id="liquid" ref={liquid}></div>
                        <img alt='drink'
                            className="fg"
                            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/drink-me_fg_small.png"
                            />
                    </div>
                </div>
                <div id="eat-me" ref={cake} onClick={growing}>
                    <img 
                        id="eat-me_sprite"
                        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_cupcake_small.png"
                        
                        alt="A cake labeled Eat Me"/>
                </div>
            </div>
        </div>
        <Alicered></Alicered>
        </div>
    )
}

export default Secondanimation