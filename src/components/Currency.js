import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

    const changeCurrency = (event)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            })
    }
    

  return (
        <div className='alert alert-secondary'> 
        {
            <label style={{marginLeft: '1rem' , backgroundColor:'#93E499', color:'white'}} >
            Currency
            <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event)} 
                style={{ marginLeft: '1rem' , backgroundColor:'#93E499', color:'white'}}>
                <option style={{color:'black'}} value="$">$ Dollar</option>
                <option selected style={{color:'black'}} value="£" >£ Pound</option>
                <option style={{color:'black'}} value="€">€ Euro</option>
                <option style={{color:'black'}} value="₹">₹ Ruppee</option>
            </select>
            </label>
        }	
        </div>
    );
};

export default Currency;