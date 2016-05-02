import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {

    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    handleClick() {
        Meteor.call('insert');
    }

    render() {
        return (
            <div className="container" onClick={this.handleClick}>
                <header>
                    <h1>Todo List</h1>
                </header>
w
                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('tasks');
    
    return {
        tasks: Tasks.find({}).fetch(),
    };
}, App);