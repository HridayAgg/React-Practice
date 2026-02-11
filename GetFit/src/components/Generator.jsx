import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'

function Header(props) {
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold
        text-slate-400'>{index}</p>
        <h4 className='text-2xl'>{title}</h4>

        </div>
        <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {
    return (
        
            <SectionWrapper header={"Generate your workout"}
                title={"It\'s time to get humoungous"}>
                <Header index={"01"} title={"Pick your poision"} 
                description={"yadayada"}/>
                {Object.keys(WORKOUTS).map((type,typeIndex)=>{
                    return (
                        <button key={typeIndex}>
                        <p>
                        {type}
                        </p>
                        </button>
                    )
                })}
            </SectionWrapper>
    )
}
