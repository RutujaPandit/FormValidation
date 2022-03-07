import React, { useEffect, useState } from 'react'
import './Form.css'

const Form
 = () => {

        const [formValues,setFormValues]=useState({username:'',email:'',password:''})
        const [formErrors,setFormErrors]=useState({});
        const [issubmit,setIsSubmit]=useState(false);
        
        const handleChange=(e)=>{
            setFormValues({...formValues,[e.target.name]:e.target.value})
        };

        const handleSubmit=(e)=>{
            e.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
        }

        useEffect(()=>{
            console.log(formErrors);
            if (Object.keys(formErrors).length === 0 && issubmit){
                console.log(formValues)
            }
        },[formErrors]);

        const validate=(values)=>
        {
            const errors={}
            const regex= /^ [A-Z0-9._%+-]+@ ( [A-Z0-9-]+.)+ [A-Z] {2,4}$/i ;
            if(!values.username){
                errors.username='Username is required';               
            }else if(values.username.length<=1){
                errors.username='Username cannot be one character';
            }

            if(!values.email){
                errors.email='Email is required';
            }

            if (!values.password) {
                errors.password = "Password is required";
              } else if (values.password.length <= 8) {
                errors.password = "Password must be more than 8 characters";
              } 
                return errors;

        }

  return (
      
    <div className='container'>
        <h1 style={{color:"White"}}>FormValidation</h1>
        <form onSubmit={handleSubmit}>
            <div className='ui_forms'>
                <div className='fields'>
                <label>UserName:</label>
                <input type='text' name='username' placeholder='Username' value={formValues.username} onChange={handleChange}/>
                </div>
                <p>{formErrors.username}</p>


                <div className='fields'>
                <label>Email:</label>
                <input type='email' name='email' placeholder='E-mail'value={formValues.email} onChange={handleChange}/>
                </div>
                <p>{formErrors.email}</p>

                <div className='fields'>
                <label>Password:</label>
                <input type='password' name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
                
                </div>
                <p>{formErrors.password}</p>
                
                <div className='button'>
                <button type='submit'>submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form;
