import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../commons/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1>I'am Alex</h1>
                    <p>React developer</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    );
};
