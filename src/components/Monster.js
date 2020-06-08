import React, {useState, useEffect} from 'react'
import './cardList/CardList.css'


function Monster() {
    const [monster, setMonster] = useState([] )
    const[searchField, setSearchField]=useState('')
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then( setMonster)
    })
    const filteredMonster=  monster.filter(y=>
         y.name.toLowerCase().includes(searchField.toLowerCase()
        ) );
        
    return (

    <div>
        <h1 style={{color: "white ",fontSize:"100px"}}> MONSTERS</h1>
         <input type='search' placeholder='search for monsters'
         onChange={e=> setSearchField(e.target.value)} />
         
       
       <div className=  'card-list'>
           
            {filteredMonster.map(x => 
            <div className= 'card'>
                 <img src={`https://robohash.org/${x.id}?set=set2&size=180x180`}/>,
                <h1 key= {x.id} >{x.name} </h1>,
                <h3>{x.email} </h3>
           </div> )}
      
        </div>
    </div>
       
    )
}

export default Monster

