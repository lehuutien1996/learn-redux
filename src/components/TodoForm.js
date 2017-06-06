import React from 'react';

export const TodoForm = (props) => {

  const { value, onChange, onSubmit } = props;

  let onSubmitForm = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="form-group">
        <label htmlFor="todo_input">Content</label>
        <input className="form-control"
          id="todo_input"
          value={ value.content }
          onChange={(e) => onChange({ ...value, content: e.target.value })} />
      </div>
    </form>
  );

};
