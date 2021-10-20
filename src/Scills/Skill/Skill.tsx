import React from 'react';
import styles from './Skill.module.css'
import {SkillPropsType} from "../../App";

export const Skill: React.FC<SkillPropsType> = ({title, text, id, icon}) => {
    return (
        <div key={id} className={styles.skill}>
            <div className={styles.icon}>{icon}</div>
            <h3>{title}</h3>
            <p className={styles.textSkill}>{text}</p>
        </div>
    );
};
