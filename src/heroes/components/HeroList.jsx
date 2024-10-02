import { getHeoresByPublisher } from "../helpers/getHeoresByPublisher"
import { HeroCard } from "./HeroCard"
import { useMemo } from "react"


export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeoresByPublisher(publisher)
    , [publisher]) 
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( (hero) =>(
                <HeroCard 
                key={hero.id} 
                {...hero}/>
            ))
        }
    </div>
  )
}