
import React from 'react'
import './style.css'
class Sorting extends React.Component {
    render() { 
        return (  
                 <div className="sorting">
                     <label>Sort-by
                         <select className="form-control" onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="duration">Lowest to highest Duration</option>
                            <option value="date">newly arrived by date</option>
                        </select>
                    </label>
                </div>
        );
    }
}
 
export default Sorting;
