import React from 'react';
import Button from '@material-ui/core/Button';
import Filled from '@material-ui/icons/Delete' ;
import Typography from '@material-ui/core/Typography';

class Item extends React.Component {
    constructor(props){
        super(props) ;
        this.deleteButtonOnClick = this.deleteButtonOnClick.bind( this ) ;
        this.changeType = this.changeType.bind( this ) ;
    }

    deleteButtonOnClick() {
        this.props.deleteButtonOnClick(this.props.name) ;
    }

    changeType() {
        this.props.onClick( this.props.name );
    }

    render() {
        const itemStyle = {
            textDecoration : this.props.item[parseFloat(this.props.name)].type ? null : 'line-through' ,
            flex : '0.9' ,
        }
        return (
            <div 
                style = {{display : 'flex' , margin : '10px 0'}}
            >
                <div
                    onClick = {this.changeType}
                    style = {itemStyle}
                >
                    <Typography component="span">
                        { this.props.oneItem.message}
                    </Typography>
                </div>
                <Button 
                    onClick = { this.deleteButtonOnClick } 
                    name = {this.props.name} 
                    style = {{flex : '0.1'}}
                    color = {'secondary'}
                >
                    <Filled>
                    </Filled>
                </Button>
            </div>
        )
    }
}

export default Item ;