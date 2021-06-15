import React, { useState, useContext } from 'react';
import {AccordionContext} from './AccordionWrapper';

const AccordionItem = (props) => {

    // const indexInfo = useContext(AccordionContext);

    let index = props.index;

    let indexPlus;

    //  const [active, setActive] = useState(0);

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
            <div key={props.index}>
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
                <div>
                    <div id={ 'sect-' + indexCount(index) } className={ active === index  ? 'panel-open' : 'panel-close' }>
                        {props.description}
                    </div>
                </div>
            </div>
    )
}

export default AccordionItem; 