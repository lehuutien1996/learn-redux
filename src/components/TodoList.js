import React from 'react';

/**
 * Render each item in passed rows
 * @param {Array} rows
 */
let renderRows = (rows, props) => {

  const { onClickEdit, onClickDestroy } = props;

  return rows.map(item => (
    <div key={ item.id } className="list-group-item">
      <span>{ item.content }</span>

      <div className="action-group">
        <button className="btn btn-primary"
          onClick={ () => onClickEdit(item) }>EDIT</button>
        <button className="btn btn-danger"
          onClick={ () => onClickDestroy(item) }>REMOVE</button>
      </div>
    </div>
  ));
};

export const TodoList = (props) => {

  console.log(props);
  const { todos } = props;

  return (
    <div className="list-group">
      { renderRows(todos, props) }
    </div>
  );

};
