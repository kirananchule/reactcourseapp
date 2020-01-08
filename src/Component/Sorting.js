import React from 'react'
import Sort from './Sort'




class Sorting extends React.Component {
constructor(props){
    super(props)
    this.state={

    }

}
sort(props){
   var sortingdata = [];
        this.props.durations.foreach(function(sortdata){
            if(sortdata.duration>="00:03:56"){
                sortingdata.push(btn.name)
            }
        })
return(
         <div>
         <p1>hey</p1>
         <ul>
                {this.props.durations.map((check, i)=>{
                   return <li key={i}>{check.duration}</li>
                 })}
 
            </ul> 
                <p2>{sortingdata}</p2>
         </div>
           
     ) }


render(){
    var x = this.props.durations
    return(
        <div>
            <p1>sort-by</p1>
    <button onClick>duration </button>
            <button>date</button>
            <ul>
                {this.props.durations.map((check, i)=>{
                   return <li key={i}>{check.duration}</li>
                 })}
 
            </ul>
           
            <Sort btn={this.props.durations} ></Sort>

      </div>
)



    }}
export default Sorting;



// const Sorting = (props)=> {
//     return(
//         <div>
//             <p1>sort-by</p1>
//             <button onClick>duration</button>
//             <button>date</button>
//          <ul>
//             {props.durations.map((check, i)=>{
//                   return <li key={i}>{check.duration}</li>
//                 })}
//         </ul>
//         </div>
//             )
//     }

