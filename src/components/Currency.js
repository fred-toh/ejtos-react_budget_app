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
            <select class='hover_color'id="currency" onChange={(event)=>changeCurrency(event)}>
                <option value="$">$ Dollar</option>
                <option selected value="£" >£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select> 
            </label>
        }	
        </div>
    );
};

export default Currency;