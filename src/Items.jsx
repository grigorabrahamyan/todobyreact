import React from 'react';
import Item from './item' ;

class Items extends React.Component {

    render() {
        return (
            <div>
                { this.props.state.items.map( ( item , index ) => {
                    return ( <Item oneItem = { item } name = {`00${index}`} key = {`00${index}`} deleteButtonOnClick = {this.props.deleteOneItem} onClick = {this.props.changeType} item = {this.props.state.items} /> )
                } ) }
            </div>
        )
    }
}

export default Items ;