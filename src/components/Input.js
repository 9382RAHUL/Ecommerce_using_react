import React from 'react'

const Input = ({handleChange,value,title,name,color}) => {
  return (
    <>
      <div>
      <label htmlFor="" className="sidebar-label-container">
            <input  onChange={handleChange} type="radio" value={value}  name={name} id="" />
            <span className="checkmark" style={{backgroundColor:color}}></span>{title} 
          </label>
      </div>
    </>
  )
}

export default Input