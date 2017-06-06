import React from 'react';

/**
 * Render each item in passed rows
 * @param {Array} rows
 */
let renderRows = (rows) => {
  return rows.map(item => (
    <div key={ item.id } className="list-group-item">
      <span>{ item.content }</span>
    </div>
  ));
};

export const TodoList = (props) => {

  console.log(props);
  const { todos } = props;

  return (
    <div className="list-group">
      { renderRows(todos) }
    </div>
  );

};
