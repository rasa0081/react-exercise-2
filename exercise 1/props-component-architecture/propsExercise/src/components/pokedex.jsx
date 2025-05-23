import PokeCard from "./pokeCard";
import "bootstrap/dist/css/bootstrap.min.css";

const PokeDex = ({pokemon})=>{
    return (
        <div className="container text-center">
            <h1 className="my-4">PokeDex</h1>
            <div className="row">
                {pokemon.map((p)=>(
                    <div className="col-md-4 mb-3" key={p.id}>
                        <PokeCard name={p.name} type = {p.type} image={p.image}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PokeDex;