import React, {Component} from 'react';
import Box from './Box';
import './BoxContainer.css';


class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 20,
        allColors: ['purple', 'lavender', 'magenta', 'violet', 'pink']
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box allColors={this.props.allColors}/>
        )
        return(
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    };
};


export default BoxContainer;