import React from 'react'


const Displaycourse = (props)=> {
    return(
        <div>
        <p>Available courses</p>
        <ul>
            {props.courses.map((course, i)=>{
                if(course.name.indexOf(props.searchText)=== -1) {
                    return null;
                } else {
                    return (<div><li key={i} onMouseover>{course.name}</li></div>
                     ) }
            })}
        </ul>
        </div>
    )
}

export default Displaycourse;
