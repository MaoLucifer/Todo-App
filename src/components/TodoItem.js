import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from 'prop-types';
import './TodoItem.css';


export class TodoItem extends Component {

  render() {

    // Keeps from repeating *this.props.todo
    const { id, title } = this.props.todo;

    const btnStyle = {
      cursor: 'pointer',
      '&:hover' : {
        backgroundColor: 'red'
      }
    }

    return (
      <div className="todo__item">
        <div className="item__check">
        <Checkbox
          color="primary"
          onChange={this.props.markComplete.bind(this, id)}
          inputProps={{ 
            "aria-label": "secondary checkbox"
          }}
        />
          {/* <input type="checkbox"  /> */}
          <p>{title}</p>
          <IconButton style={btnStyle} color="secondary" onClick={this.props.delTodo.bind(this, id)} aria-label="delete">
            <DeleteIcon  />
          </IconButton>
        </div>
        
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}
export default TodoItem;