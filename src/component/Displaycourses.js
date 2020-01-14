import React from 'react'
import './style.css'
class Displaycourses extends  React.Component {
    render() { 
         let coursename = this.props.courses.map((Course,i)=>{
             return Course.name
           })
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
                                   ) 
                                }
                        }
                    )
                    
      return (
          <div className="super-list">
             {coursestodisplay}
           </div>
         );
    }
}
 
export default Displaycourses;


