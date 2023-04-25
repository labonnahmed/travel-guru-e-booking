import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { mainContext } from '../../App';
import './Main.css';
import bannerImage from  '../../images/Rectangle 1.png';

const Main = ({activePlace, setactivePlace}) => {
    const[places] = useContext(mainContext);

    const handleArrowBtn= (id) => {  
        const place= (places.find(p => p.id == id));
        place && setactivePlace(place)
    }
    return (
        <div>
            <img src={bannerImage} alt="" className='w-100 bannerImage'/>
            <section className='d-flex main-context text-white'>
                <div className="card-details">
                    <h1>{activePlace.title}</h1>
                    <p>{activePlace.description.substring(0, 188)+ `${'...'}`}</p>
                    <Link to={`/booking`}>
                        <Button variant='warning'>
                            Booking <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </Button>
                    </Link>
                </div>
                {
                    places.map( place => 
                    <div className="ms-auto isActive" key={place.id}> 
                        <img src={place.image} alt="" onClick={() =>setactivePlace(place)}/>
                        <h4 className='align-bottom'>{place.title}</h4>
                    </div>)
                }
            </section>
            <div className='text-center mt-5'>
                <FontAwesomeIcon icon={faCircleChevronLeft} className='arrow me-1' onClick={() => handleArrowBtn(activePlace.id-1)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCircleChevronRight} className='arrow ms-1' onClick={() => handleArrowBtn(activePlace.id+1)}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Main;