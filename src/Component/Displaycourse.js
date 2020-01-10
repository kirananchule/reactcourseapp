import React from 'react'
import './style.css'
//import AddtoCart from './AddtoCart';

// const Displaycourse = (props)=> {
//     return(
//         <div>
//         <h2>Available courses</h2>
//         <ul>
//             {props.courses.map((course, i)=>{
//                 if(course.name.indexOf(props.searchText)=== -1) {
//                     return null;
//                 } else {
//                     return (
//                      <div className="course-list"><li key={i}>{course.name}</li>
//                     <AddtoCart></AddtoCart>
//                      </div>
//                      ) }
//             })}
//         </ul>
//         </div>
//     )
// }
class Displaycourse extends  React.Component {
    state = {  }
    render() { 
         let coursename = this.props.courses.map((Course,i)=>{
             return Course.name
           
         })
         console.log('courses',coursename);
    
         const coursestodisplay=this.props.courses.map((course, i)=>{

                            if(course.name.indexOf(this.props.searchText)=== -1) {
                                return null;
                            } else {
                                return (
                                
                                 <div className="main-course-list">
                                 <div className="course-list">< li key={i} className="list">{course.name}</li> <p> course-duration: {course.duration} </p><p>course-date:{course.publishDate}</p> </div>
                                  <div className="btn">
                                  <button className="add-to-cart" onClick={(e)=>this.props.handleAddToCart(e, course)}>Add to cart</button>
                                  <button className="remove-from-cart" onClick={(e)=>this.props.handelRemoveFromCart(e, course)}>Remove</button>
                                  </div>
                                  </div>
                                 ) }
                        })
                    
                             
                   
                    
        
      


        return (
<div className="super-list">
    {coursestodisplay}
</div>
          );
    }
}
 
export default Displaycourse;


