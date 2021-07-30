import React from 'react';
import './design.css';
import a from './images/a.jpeg';
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.jpg';
import e from './images/e.jpeg';
import f from './images/f.jpg';
import g from './images/g.jpeg';
import h from './images/h.jpg';


export default function Content(){
   

    return<div className='container'>
      

      <div className='item' >
        <img class='left-image' src={a} alt="Not Found" />
        <img class='left-image' src={b} alt="Not Found" />
        <img class='left-image' src={c} alt="Not Found" />
        <img class='left-image' src={d} alt="Not Found" />
      </div>  
      <div className='item' >
        <div className='input'></div>
        <button className='upload-btn'>Upload</button>
      </div>
      <div className='item'> 
        <img class='right-image' src={e} alt="Not Found" />
        <img class='right-image' src={f} alt="Not Found" />
        <img class='right-image' src={g} alt="Not Found" />
        <img class='right-image' src={h} alt="Not Found" />
      </div>
        
    </div>
}