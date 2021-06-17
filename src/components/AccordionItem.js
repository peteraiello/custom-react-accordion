import React, { useContext } from 'react';
import {AccordionContext} from './AccordionWrapper';

const AccordionItem = (props) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
     }

    return (
        <div>
            <h3>
                <button 
                    onClick={(e) => eventHandler(e, props.index)}
                    className={ active === props.index ? 'active' : 'inactive'}
                    aria-expanded={ active === props.index ? 'true' : 'false' }
                    aria-controls={ 'sect-' + indexCount(props.index) }
                    aria-disabled={ active === props.index ? 'true' : 'false' }
                >
                    <span className="title-wrapper">{props.title}
                        <span className={ active === props.index ? 'plus' : 'minus'}></span>
                    </span>  
                </button>
            </h3>
            <div>
                <div id={ 'sect-' + indexCount(props.index) } className={ active === props.index  ? 'panel-open' : 'panel-close' }>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem; 