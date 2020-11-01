import React from 'react';

import './form-input-style.scss';

const FormInput = ({handleChange, label, ...propertiLainnya}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...propertiLainnya} />
        {
            label?
            (<label className={`${propertiLainnya.value.lenght ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>

)

export default FormInput;