import React, { Component } from 'react';
import Searchcourse from './Searchcourse.js';
import Displaycourses from './Displaycourses.js'
import Sorting from './Sorting.js';
import Displaycart from './Displaycart.js';
import './style.css'


// follow naming conventions
// class, component name to be capital case
// folder names to be small case
// variable names to be camel case
// avoid spelling mistakes
// formatting not done 
// use 4 space tabs 
// no duplicate imports of style files

class CoursesDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
                coursedetail: [ {
                id: 1,  
                name: "React - basics",
                description: "This course is going to take you through basics of React.",
                author: "James White",
                publishDate: "12/03/2019",
                duration: "00:03:56",
                image: "https://cdn.auth0.com/blog/react-js/react.png"
              },
              {
                id: 2,
                name: "Vue - learn vue in an hour",
                description: "This course teaches you how to build a vue application in an hour.",
                author: "Michael Brown",
                 publishDate: "17/10/2019",
                duration: "00:00:59",
                image: "https://vuejs.org/images/logo.png"
              },
              {
                id: 3,
                name: "CSS Animations",
                description: "Learn how to animate anything in CSS",
                author: "Alan Smith",
                publishDate: "04/12/2018",
                duration: "00:02:11",
                image: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
              },
              {
                id: 4,
                name: "JS - Zero to hero",
                description: "Everything you need to know in JS",
                author: "Sarah Parker",
                publishDate: "12/03/2019",
                duration: "01:01:35",
                image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
              }
             ],
            search:'',
            CartCourse:[]
          }
        }

    
    
searchCourse =(text) => {
        this.setState({ search: text })
 }
  
listProducts = () => {
  this.setState(state => {
    if (state.sort !== '')
        {
          state.coursedetail.sort((a, b) => (state.sort === 'duration'? ((a.duration > b.duration) ? 1 : -1) : ((a.publishDate < b.publishDate) ? 1 : -1)));
        } 
           else {
            state.coursedetail.sort((a, b) => (a.id > b.id) ? 1 : -1);
          }
     })
  }

 handleSortChange = (e) => {
   this.setState({ sort: e.target.value });
     this.listProducts();
  }

handelRemoveFromCart = (e,course)=>{
 e.preventDefault()
     this.setState(state=>{
      const cartCourse = this.state.cartCourse.filter(a=>a.id !==course.id);
        return{cartCourse:cartCourse}
 })
}

handleAddToCart = (e,course) => {
    e.preventDefault()
         this.setState(state => {
           const CartCourse = this.state.CartCourse;
            let productAlreadyInCart = false;
            CartCourse.forEach(items => {
                   if (items.id === course.id) {
                       items.count += 1;
                         productAlreadyInCart = true;
 } });
                         if (!productAlreadyInCart) {
                          CartCourse.push({ ...course, count: 1 });
                       } return ( {CartCourse} )
             });
}
 onHover=()=>{
        if(document.getElementsByClassName('main-course-list').Hover){
            document.getElementsByClassName('add-to-cart').style.display = 'block'
        } 
}
    
render() {
      return(
          <div className="main">
              <Searchcourse onSearch={this.searchCourse}></Searchcourse>
              <Displaycourses courses={this.state.coursedetail} searchText={this.state.search} handleAddToCart={this.handleAddToCart} handelRemoveFromCart={this.handelRemoveFromCart} onHover={this.onHover}></Displaycourses>
              <Sorting handleSortChange={this.handleSortChange} ></Sorting>
              <Displaycart cartCourse={this.state.CartCourse}></Displaycart>
          </div>
      )
  }

}
export default CoursesDetails;