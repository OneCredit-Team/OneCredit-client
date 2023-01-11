import './style.scss';
import PlaceData from "./place.json";
import {BsPlusLg} from "react-icons/bs";
export default function PlaceBox(){
    return(
        <>
            <div className='placebox-tit'>
                <div className='placebox-div'>
                    {
                        PlaceData.places.map(p => (
                            <p className='place-name-div'>
                                <p className='place-name'>{p.name}</p>
                            </p>
                        ))
                    }
                    <p className='place-name-div'>
                        <p className='place-name'>+</p>
                    </p>
                </div>
            </div>
        </>
    )
}