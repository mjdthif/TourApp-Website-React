import React, {Component} from 'react';
import './Tour.scss';
class Tour extends Component {
    state={
        showInfo : false, 
    };
// This handles showing the info and hiding it. 
showInfoHandler = () =>{
    this.setState({showInfo :!this.state.showInfo})
}
    render() { 
        const { id, city , img, name , info} = this.props.tour;
        const {removeTour} = this.props;
        return ( 
            <div className="tour-sec">
                <div className="img-container">
                 <img
                 width= "200"
                  src={img}
                   alt="Tour"/>
                   <span className="close-btn" onClick={()=>{removeTour(id)}}>
                       <i  className="fas fa-window-close"/>
                   </span>
                </div>
                <div className="tour-info">
                    <h3>
                {city}
                    </h3>
                    <h4>
                {name}
                    </h4>
                    <h5>
                        <span onClick= {this.showInfoHandler}>
                        Info {""}
                            <i className="fas fa-caret-square-down"/>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p> }
                </div>
            </div>
         );
    }
}
 
export default Tour;