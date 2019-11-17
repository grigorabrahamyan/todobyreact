import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {

    render() {
        const { onClick, ...props } = this.props;   
        const itemStyle = {
            flex : '0.9' ,
            autoComplete : 'off' ,
        } ;
        return (
            <header >
                <Typography variant="h3" style = {{textAlign : 'center' , opacity : '0.7' }} >ToDo List</Typography>
                <Typography variant="h6" style = {{textAlign : 'center' , opacity : '0.7' }} >My first project by React and Material-UI</Typography>
                <div style = {{display : 'flex' , marginTop : '50px'}} >
                    <TextField value = { this.props.value } type="text" {...props} placeholder = {'ADD your task...'} style = {itemStyle} />
                    <Button color = {'secondary'} onClick = {onClick} style = {{flex : '0.1' }} >Add...</Button>
                </div>
            </header>
        )
    }
}

export default Header ;