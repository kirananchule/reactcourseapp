import React from 'react'


class Searchcourse extends React.Component {

    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler() {
        this.props.onSearch(this.refs.searchRef.value);
    }

    render() {
        return(
             <div>
             <input type="text" ref="searchRef" onChange={this.changeHandler}></input><p1>serach-courses</p1>
            </div>
        )
    }
}

export default Searchcourse;