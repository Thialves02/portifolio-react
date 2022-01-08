import React from 'react'
import './Skills.css'

export default function Skills() {
    return (
        <div className='container-skills'>
            <h12>Minhas skills</h12>
            <div className='skills'>
                <div className='skill' data-anime='right'>
                    <span>HTML</span>
                </div>
                <div className='skill' data-anime='right'>
                    <span>CSS</span>
                </div>
                <div className='skill' data-anime='right'>
                    <span>JS</span>
                </div>
                <div className='skill' data-anime='right'>
                    <span>REACT</span>
                </div>
                <div className='skill' data-anime='left'>
                    <span>FIGMA</span>
                </div>
                <div className='skill' data-anime='left'>
                    <span>JIRA</span>
                </div>
                
                <div className='skill' data-anime='left'>
                    <span>GIT</span>
                </div>  
                <div className='skill' data-anime='left'>
                    <span>GITHUB</span>
                </div>       
            </div>
        </div>
    )
}
