import React, { useState } from 'react';
import data from '../data.json';

const Accordion = () => {
    
    const [active, setActive] = useState(0);

    const dataCount = data.length -1;

    const keyPressed = (e) => {
        e.preventDefault();
        console.log('key event fired');

        let key = e.key;
        if(key === 'ArrowDown' && active < dataCount) {
            setActive(active +1);
        }
        if(key === 'ArrowUp' && active > 0) {
            setActive(active -1);
        }
    }

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
    }

    return(
        <div 
            onKeyUp={(e) => keyPressed(e)}
            suppressContentEditableWarning={true}
            contentEditable={true}
        >
            <form>
            { data.map((tab, index) => (
                <div key={index}>
                    <button onClick={(e) => eventHandler(e, index)}
                    className={index === active ? 'active' : 'inactive'}
                    >
                    {tab.title}
                    <span className={index === active ? 'plus' : 'minus'}></span>
                    </button>
                    <div className={ index === active ? 'panel-open' : 'panel-close' }>
                            { tab.description }
                    </div>
                </div>
                ))
            }
            </form>
        </div>
    );
}

export default Accordion;