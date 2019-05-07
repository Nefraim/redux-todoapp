import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render () {
    const {
      activeTodoCount,
      completedTodoCount,
      filter,
      onClearCompleted,
    } = this.props;

    let itemMessage;

    if (activeTodoCount === 0) itemMessage = 'no item';
    if (activeTodoCount === 1) itemMessage = '1 item left';
    if (activeTodoCount > 1) itemMessage = `${activeTodoCount} items left`;

    return (
      <footer className='footer'>
        <span className='todo-count'>{itemMessage}</span>
        <ul className='filters'>
          <li>
            <Link to='/all'
              className={classNames({selected: filter.all})}
            >
              All
            </Link>
          </li>
          <li>
            <Link to='/active'
              className={classNames({selected: filter.active})}
            >
              Active
            </Link>
          </li>
          <li>
            <Link to='/completed'
              className={classNames({selected: filter.completed})}
            >
              Completed
            </Link>
          </li>
        </ul>
        {(completedTodoCount > 0) ? (
          <button
            className='clear-completed'
            onClick={onClearCompleted}>
            Clear completed
          </button>
        ) : null}
      </footer>
    )
  }
}

Footer.propTypes = {
  activeTodoCount: PropTypes.number.isRequired,
  completedTodoCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
}
