import React, { useEffect, useState, useRef } from 'react';
import styles from './custom.module.css';
import './effect.css'


function Carousel({ details }) {

    const [currentValues, setCurrent] = useState([]);
    const [lastElement, setLastElement] = useState(3);
    const inputVal = useRef(null)
    const [parentValue, setParentValue] = useState([]);

    useEffect(() => {
        if (parentValue && parentValue.length > 0) {
            if (parentValue.length >= 3) {
                const initalValues = parentValue.slice(0, 3);
                console.info('initalValues', initalValues)
                setCurrent(initalValues);
                setLastElement(3);
            }
            else {
                const initalValues = parentValue
                console.info('initalValues', initalValues)
                setCurrent(initalValues);
                setLastElement(parentValue.length);
            }

        }
    }, [parentValue]);

    useEffect(() => {
        if (details && details.length > 0) {
            setParentValue(details);
        }
    }, [details]);

    const filterValue = () => {
        console.log('Values :', inputVal.current.value);
        const val = (inputVal.current.value).toLowerCase();
        if (val && val.length >= 1) {
            const initalValues = parentValue.filter((ele) => {
                if (ele.details) {
                    console.log(' ele.details : ', ele.details)
                    return ele.details.includes(val.toLowerCase());
                }
            });
            console.info('next values after filter', initalValues);
            setParentValue(initalValues);
        }
    }

    const prevClick = () => {
        if (lastElement > 3) {
            const init = lastElement - (3 * 2);
            if (init > 0) {
                console.info('lastElement values', lastElement);
                console.info('lInitial value', init);
                let info = JSON.parse(JSON.stringify(parentValue));
                const req = info.slice(init, lastElement - 3);
                console.info('required array', req)
                setCurrent(req);
                setLastElement(lastElement - 3)
            }
            else {
                let info = JSON.parse(JSON.stringify(parentValue));
                const req = info.slice(0, 3);
                setCurrent(req);
                setLastElement(3)
            }

        }
    }

    const nextClick = () => {
        if (lastElement + 3 >= parentValue.length) {
            const remaning = parentValue.length - lastElement;
            console.log('remaiing ', remaning);
            if (remaning !== 0) {
                const initalValues = parentValue.slice(lastElement, lastElement + remaning);
                console.info('next values', initalValues)
                setCurrent(initalValues);
                setLastElement(lastElement + remaning)
            }


        }
        else if (lastElement + 3 < parentValue.length) {
            const initalValues = parentValue.slice(lastElement, lastElement + 3);
            console.info('next values', initalValues)
            setCurrent(initalValues);
            setLastElement(lastElement + 3)
        }
    }


    return (
        <div>
            <form>
                <input placeholder='Search by Title' ref={inputVal} type='text' />
                <button onClick={filterValue} type='button' > Filter</button>
                <button type='button' > Reset</button>
                {`Total count: ${parentValue.length}`}
            </form>

            <div style={{ marginTop: '3%' }} className={styles.parent}>
                <div className={styles.leftArrow}>
                    <button
                        style={{ opacity: lastElement.length <= 3 ? 0.7 : 1 }}

                        onClick={prevClick} disabled={lastElement === 3} type="button"> Arrow left</button>
                </div>
                <div className={styles.mainData}>
                    <div className={`${styles.parent}`}>
                        {
                            currentValues.map((val, index) => {
                                const isCenter = (index === 1 && currentValues.length === 3) ? true : false;
                                const imageWidth = isCenter ? '270px' : '220px'
                                const setWidth = (index === 1 && currentValues.length === 3) ? 4 : 2;
                                console.log('currentValues', currentValues)
                                return (
                                    <div className={isCenter ? styles.itemCenter : styles.item} style={{
                                        flex: setWidth, height: '400px',
                                        maxHeight: '400px', overflow: 'hidden', textAlign: 'center'
                                    }} key={index}>
                                        <h4>{val.mission_name} : {val.flight_number}</h4>
                                        <br />
                                        <img style={{ width: imageWidth }} src={val.links.mission_patch_small} />
                                        <h5>{val.details}</h5>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
                <div className={styles.rightArrow}>
                    <button
                        style={{ opacity: currentValues.length < 3 ? 0.7 : 1 }}
                        disabled={currentValues.length < 3} onClick={nextClick} type="button"> Arrow right</button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;