import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {

    return heroes.find( hero => id === hero.id)

}