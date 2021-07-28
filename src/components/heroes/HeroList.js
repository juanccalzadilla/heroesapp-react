import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher'
import HeroCard from './HeroCard'

export const HeroList = ({publisher}) => {
const hero = useMemo(() => getHerosByPublisher(publisher), [publisher])
    return (
        <div className="row row-cols-1 row-cols-md-3 animate__animated animate__fadeInLeft" >
            {hero.map(hero =>(
                <HeroCard key={hero.id} hero={hero}/>
            ))}
        </div>
    )
}
