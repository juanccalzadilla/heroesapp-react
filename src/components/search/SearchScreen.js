import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHerosByName } from '../../selectors/getHerosByName';

export const SearchScreen = ({history}) => {
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search)
  const [{search}, handleChange] = useForm({
      search: q
    });
    const herosFiltered =useMemo(() => getHerosByName(q), [q])

    

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`)
    }

    return (
        <div>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-md-5">


                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="Find your hero"
                        className="form-control"
                        name='search'
                        value={search}
                        onChange={handleChange}
                        ></input>
                        <button type="submit" className="btn btn-outline-danger mt-3 btn-block">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-md-7 text-center">
                    <h4 className="mt-3">Results for your heros</h4>
                    <hr/>
                      { 
                      ((q === '') && <div className="alert alert-info animate__animated animate__fadeInDown">Search a hero</div>)
                      }
                      { 
                      ((q !== '' && herosFiltered.length === 0) && <div className="alert alert-danger animate__animated animate__fadeInDown">Hero "{q}" does not exist, please search a valid hero.</div>)
                      }
                    {herosFiltered.map(hero => 
                    
                        <HeroCard key={hero.id} hero={hero}
                        />
                    
                    
                    )}
                    
                </div>
            </div>
        </div>
    )
}
