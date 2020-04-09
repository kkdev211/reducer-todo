import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          taskName: ""
        };
      }

handleChanges = e => {
    // update state with each keystroke
    this.setState({ taskName: e.target.value });
  };

  // class property to submit form
  handleAddItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.taskName);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleAddItem}>
        <input
          type="text"
          name="task"
          value={this.state.taskName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}


export default TodoForm;