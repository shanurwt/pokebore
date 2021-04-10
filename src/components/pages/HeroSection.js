import React, {useEffect, useState} from 'react'
import './HeroSection.css';
import axios from 'axios';

var i = Math.floor((Math.random() * 700) +1);

console.log(i);
const base ='https://pokeapi.co/api/v2/pokemon/' + i;



function HeroSection() {

    const [name, setName] = useState();
    const [imgUrl, setUrl] = useState();
    const [type, setType] = useState();
    const [ability, setAbility] = useState();
    
    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(() => {
        async function getData(){
            const res = await axios.get(base);
            setName(res.data.species.name);
            setUrl(res.data.sprites.front_default);
            setType(res.data.types[0].type.name);
            setAbility(res.data.abilities[0].ability.name);
        }
        getData()
    })


    return (
        <div className='container'>
            <img src="" alt=""/>
            <h1 className='Heading'>PokeBore</h1>
            <div className="card">
                <div className="imageBox">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="info">
                <div className="name">
                    <h2>{name}</h2>
                </div>
                <div className="type">
                    <h3>Type: {type}</h3>
                </div>
                <div className="move">
                    <h3>Ability: {ability}</h3>
                </div>
                </div>
            </div>

            <div className="btn">
                <button onClick={refreshPage} >For new</button>
            </div>
        </div>
    )
}


export default HeroSection
