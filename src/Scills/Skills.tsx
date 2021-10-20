import React from 'react';
import styles from './Skills.module.css'
import styleContainer from "../commons/styles/Container.module.css";
import {Skill} from "./Skill/Skill";
import {SkillPropsType} from "../App";

type SkillsPropsType = {
    skills: SkillPropsType[]
}

export const Skills:React.FC<SkillsPropsType> = ({skills}) => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    {skills.map((item) => {
                     return <Skill title={item.title} text={item.text} id={item.id} icon={item.icon}/>
                    })}
                </div>
            </div>
        </div>
    );
};
