import React from 'react';
import classNames from "classnames";
import './button.css'

export const Button = ({
    onClick,
    type,
    children,
    size ='s',
    className,
}) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': type === 's',
        'btn--medium': type === 'm',
        'btn__delete': type === 'delete',
    })
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};


