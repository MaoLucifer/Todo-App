import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './AddTodo.css';

export class AddTodo extends Component {
    
  state = {
    title: ''
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  

  render() {
    
    const addStyle = {
      borderRadius: 0,
      textAlign: 'center'
    }

    return (
      <div className="form__container">
          <form autoComplete="off" onSubmit={this.onSubmit} style={{display: 'flex'}}>
          <input 
            className="form__input"
            type="text" 
            name="title" 
            placeholder="Milk..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <Button
            type="submit"
            className="form__btn"
            variant="contained"
            color="secondary"
            style={addStyle}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
          {/* <input 
            type="submit" 
            value="Add"
            
          /> */}
        </form>
      </div>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
