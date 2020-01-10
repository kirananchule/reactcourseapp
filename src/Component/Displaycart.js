import React, { Component } from 'react';
import './style.css'
class Displaycart extends Component {

    render() { 
       const cartCourse= this.props.cartCourse
       console.log('items in cart',cartCourse);
       const cc = cartCourse.map((Course,i)=>{
       return <li key={i} className="listing">{Course.name}</li>
       })
        console.log('name of course',cc)
        

        return ( 
            <div className="row">
            {cartCourse.length===0 ?<span>cart is empty</span>:<div><span>added courses</span>{cc}</div>}
            </div>
         );
    }
}
 
export default Displaycart;