import PropTypes from 'prop-types';
import React from 'react';

const TodosList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TodosList;
