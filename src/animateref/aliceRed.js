import React, {useRef, useState} from 'react';
import '../App.css';
import Redqueen  from './redQueen'
import fground1 from './foreGround1'
import fground2 from './foreGround2'
import bground from './backGround1'
import bground2 from './backGround2'
import '../bootstrap.min.css'

function Mainpage() {
    let [redqn,setRedqn] = useState(0);
    
    let redquen = useRef(null)
    redquen = Redqueen(redqn).value

    let foreground1 = useRef(null);
    foreground1 = fground1()

    let foreground2 = useRef(null);
    foreground2 = fground2();
    
    let background1 = useRef(null)
    background1 = bground()
    
    let background2 = useRef(null)
    background2 = bground2()

    
    const Handle_alicespeed = () => {
        
       setRedqn(++redqn);
    }
    

    return (
       
        <div className="wrapper">
            <div className="sky">
            <h3 className='btn btn-danger' >Scroll up to see Alice</h3>
                        </div>
            <div className='earth'>
                <div className="red-queen" onClick={Handle_alicespeed}>
                    <img
                        
                        id="red-queen_and_alice_sprite"
                        ref={redquen}
                        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
                        alt="Alice and the Red Queen running to stay in place."src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"/>
                </div>
            </div>
            <div className="scenery foreground1" ref={foreground1}>

                <img 
                    className="palm3"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
                    alt=" "/>
            </div>
            <div className="scenery foreground2" ref={foreground2}>
                <img 
                    className="bush"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
                    alt=" "/>
                <img
                    className="w_rook_upright"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
                    alt=" "/>
            </div>
            <div className="scenery background1" ref={background1}>
                <img
                    className="r_pawn_upright"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
                    alt=" "/>
                <img
                    className="w_rook"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
                    alt=" "/>
                <img
                    className="palm1"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
                    alt=" "/>
            </div>
            <div className="scenery background2" ref={background2}>
                <img
                    className="r_pawn"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
                    alt=" "/>

                <img
                    className="r_knight"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
                    alt=" "/>
                <img
                    className="palm2"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
                    alt=" "/>
            </div>
        </div>
        
    );
}

export default Mainpage;