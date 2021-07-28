import { heroes } from "../data/heroes";

export const getHerosByPublisher = (publisher) =>{

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" does not exist, valid publisher ${validPublisher}`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}