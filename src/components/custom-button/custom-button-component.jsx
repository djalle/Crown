import React from 'react';
import './custom-button-style.scss';

const CustomButton = ({children, apakahUdahMasukGoogle, ...propertiLainnya}) => (
    <button className={`${apakahUdahMasukGoogle ? 'google-sign-in' : ''} custom-button`} {...propertiLainnya}>
        {children}
    </button>
);

export default CustomButton;