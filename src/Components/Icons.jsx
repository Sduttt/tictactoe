import React from "react";
import 'animate.css';
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'

const Icon = ({ name }) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icon text-muted animate__animated animate__fadeInUp" />;
        case 'cross':
            return <FaTimes className="icon text-muted animate__animated animate__fadeInDown" />;
    
        default:
            return <FaPen className="icon text-muted" />;
    }
}

export default Icon;