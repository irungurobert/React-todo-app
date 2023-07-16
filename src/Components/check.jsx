import React, { Component } from 'react';

function Checkbox() {
    
const [isChecked, setIsChecked] = React.useState(false);
     

React.useEffect(()=>{
const savedChecked=localStorage.getItem('check');
setIsChecked(JSON.parse(savedChecked));

},[]);

  const handleCheckboxChange = (event) => {
    const newCheck=event.target.checked
    setIsChecked(newCheck);
    localStorage.setItem('check',JSON.stringify(newCheck));
  };

  return (
    <div className='m-5'>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Checkbox
      </label>
    </div>
  );
};



export default Checkbox;