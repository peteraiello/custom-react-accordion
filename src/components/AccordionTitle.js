import React, { useState, useContext } from 'react';
import {AccordionContext} from './AccordionWrapper';


const AccordionTitle = (props) => {

    let index = props.index;

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        // console.log(index);
        e.preventDefault();
        setActive(index);
        console.log(active);
    }

    return (
        <h3>
            <button 
                onClick={(e) => eventHandler(e, index)}
                className={ active === index ? 'active' : 'inactive'}
                aria-expanded={ active === index ? 'true' : 'false' }
                aria-controls={ 'sect-' + indexCount(index) }
                aria-disabled={ active === index ? 'true' : 'false' }
                tabIndex={indexCount(index)}
            >
                <span className="title-wrapper">{props.title}
                    <span className={ active === index  ? 'plus' : 'minus'}></span>
                </span>  
            </button>
        </h3>
    )
}

export default AccordionTitle; 
