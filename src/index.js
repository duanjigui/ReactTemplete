import React from 'react'
import ReactDOM from 'react-dom'
class AppComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<h1>hello world! </h1>)
    }
}

ReactDOM.render(<AppComponent></AppComponent>,document.getElementById("app"))
