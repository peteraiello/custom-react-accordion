import React, { useState } from 'react';
import data from '../data.json';

const Accordion = () => {
    
    const [active, setActive] = useState(0);
    const dataCount = data.length -1;

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    const keyPressed = (e) => {
        e.preventDefault();
        console.log(dataCount);
        let key = e.key;
        let arrowUp = 'ArrowUp';
        let arrowDown = 'ArrowDown';
        if(key === arrowDown && active < dataCount) {
            setActive(active +1);
        }
        if(key === arrowUp && active > 0) {
            setActive(active -1);
        }
    }

    return(
        <div onKeyUp={(e) => keyPressed(e)}>
            <form>
            { data.map((tab, index) => (
                <div key={index}>
                    <button onClick={(e) => eventHandler(e, index)}
                    className={index === active ? 'active' : 'inactive'}
                    >
                    {tab.title}
                    <span className={index === active ? 'plus' : 'minus'}></span>
                    </button>
                    { index === active ? <div className="panel"> {tab.description} </div> : ''}
                </div>
                ))}
            </form>
        </div>
    );
}

export default Accordion;