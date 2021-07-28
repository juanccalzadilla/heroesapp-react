import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHerosById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
    const {heroId} = useParams();
const hero = useMemo(() => getHerosById(heroId), [heroId])
    if (!hero) {
        return <Redirect to="/" />
 }    

 const { id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

 const handleReturn = () => {
     if (history.length <= 2) {
         history.push('/')
     }else{

         history.goBack();
     }
 }

    return (
        <div className="row mt-5 ">
            <div className="col-4 animate__flipInX animate__animated">
                <img 
                    src={`../assets/heroes/${id}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"
                ></img>
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>{alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>{publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b>{first_appearance}
                    </li>
                </ul>

                <h5 className="text-center mt-2"> Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-danger btn-block" onClick={handleReturn}>Return</button>
            </div>
        </div>
    )
}
