import React from 'react';

const Option = (props) => {
  return (
    <div>
      <ol>
        {props.optionText}
        <button 
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }}
        >
          Remove
        </button>
      </ol>
    </div>
  );
};

export default Option;