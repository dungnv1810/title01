import React from "react";
import './style.css'
const Title = (props) =>{
    const {title} = props;
    return(
        <React.Fragment>
            <h2 className="title">{title}</h2>
        </React.Fragment>
    )
}
export default Title;