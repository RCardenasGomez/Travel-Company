import React,{forwardRef,useEffect,useRef} from 'react'
export default forwardRef( ({type='text',icon='user', placeholder='', name, contact, Description, id, value, className, required, isFocused, handleChange},ref)=> {
    const input =ref ? ref: useRef()
    useEffect(() =>{
        if(isFocused){
            input.current.focus()
        }

    }, [])
  return (
    <div className='input-group mb-3'>
        <span className='input-group-text'>
            <i className={'fa-solid' + icon }></i>
        </span>
        <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        name={name} 
        contact={contact}
        description={Description}
        id={id} 
        className={className} 
        ref={input} 
        required={required} 
        onChange={(e) => handleChange(e)}
        />

    </div>
  )
})
