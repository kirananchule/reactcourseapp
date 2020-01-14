import React, { Component } from 'react';
import './style.css'
class Displaycart extends Component {

    render() { 
             const cartCourse= this.props.cartCourse
                const addedCourses = cartCourse.map((Course,i)=>{
                     return <li key={i} className="listing">{Course.name}</li> })
                         return ( 
                             <div className="row">
                                {cartCourse.length===0 ?<span>cart is empty</span>:<div><span>added courses</span>{addedCourses}</div>}
                             </div>
                     );
            }
}
 
export default Displaycart;