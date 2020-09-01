import React , {Component} from 'react';
import Tour from '../Tour/Tour'
import './TourList.scss';
import {tourData} from '../tourData'
class TourList  extends Component {
    state={
        tours:tourData
    }
// This handler is for closing the tour. 
// Create a function to remove on item from the tour list. 
removeTour = (id) =>{
    const{tours} = this.state;
    const sortedTours = tours.filter( tour => tour.id !== id )
    this.setState({tours:sortedTours})
}
    render() { 
        const {tours} = this.state;
        return ( 
            <div className="tour-list">
                {tours.map( tour => {
                    return(
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    )
                })}
            </div>
            

         );
    }
}
 
export default TourList;