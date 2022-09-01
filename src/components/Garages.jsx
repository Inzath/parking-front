import axios from "axios";
import { Link } from "react-router-dom";


const Garages = (props) => {  
    console.log(props)

    const handleDelete = (id) => {
        axios.delete("http://localhost:8080/parkings/"+ id).then ((res) => console.log(res))
        window.location.reload() 
    }


    const handleOne = () => {
        axios.get("http://localhost:8080/reservations/" + props.parking._id).then ((res) => console.log(res))
    }

    return (
        <div className="garages">
            
            <div className="garages---head" >
                <div className="garages--head" >
                   <h2>{props.parking.name}</h2>
                   <small>{props.parking.city}</small>
                </div>
                <div>
                    <p className="city--" >{props.parking.type}</p>
                </div>

            </div>

            <div className="info"  >
                <Link to={'updateparking/'+props.parking._id} className=""   >
                    <button type="submit" className='modifier'>Modifier</button>
                </Link>
               <button onClick={() => handleDelete(props.parking._id)} type="submit" className='supprimer'>Supprimer</button>

               <Link to={'../parkings/' + props.parking._id }>
                  <button type="submit" className='voir' onClick={() => handleOne(props.parking._id)} >Voir plus</button>
               </Link>
            </div>
        </div>
    );
};


export default Garages;