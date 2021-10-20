import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Scills/Skills";
import {v1} from "uuid";

export type SkillPropsType = {
    id: string
    title: string
    text: string
    icon: string
}


function App() {

    const skills: SkillPropsType[] = [
        {id: v1(), title: 'JS', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam, aut dolorem explicabo fugit in ipsam laborum maxime nesciunt officiis pariatur porro quia quis quos similique soluta suscipit unde voluptatum?', icon: 'path'},
        {id: v1(), title: 'CSS', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam, aut dolorem explicabo fugit in ipsam laborum maxime nesciunt officiis pariatur porro quia quis quos similique soluta suscipit unde voluptatum?', icon: 'path'},
        {id: v1(), title: 'React', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam, aut dolorem explicabo fugit in ipsam laborum maxime nesciunt officiis pariatur porro quia quis quos similique soluta suscipit unde voluptatum?', icon: 'path'},
    ]

    return (
        <div className="App">

            <Header />
            <Main />
            <Skills skills={skills}/>
        </div>
    );
}

export default App;
