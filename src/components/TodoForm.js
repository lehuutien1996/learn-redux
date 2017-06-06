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
        <input className="form-control"
          value={ value }
          onChange={(e) => onChange(e.target.value)} />
      </div>
    </form>
  );

};
