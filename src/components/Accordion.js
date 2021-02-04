import React, { useState } from 'react';
import data from '../data.json';

const Accordion = () => {
    
    const [active, setActive] = useState(0);

    const eventHandler = (index) => {
        console.log(index);
        setActive(index);
    }

    return(
        <form onClick={(e) => e.preventDefault()}>
        { data.map((tab, index) => (
            <div key={index}>
                <button onClick={() => eventHandler(index)}
                className={index === active ? 'active' : 'inactive'}
                >
                {tab.title}
                <span className={index === active ? 'minus' : 'plus'}></span>
                </button>
                { index === active ? <div className="panel"> {tab.description} </div> : ''}
            </div>
            ))}
        </form>
    );
}

export default Accordion;