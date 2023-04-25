import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakedata2 from '../../fakedata/fakedata2.json';
import star from '../../images/icons/star_1_.png';
import './Destination.css'

const Destination = ({activePlace}) => {
    console.log(activePlace)
    const{title, map}= activePlace;
    const[content, setContent]= useState([]);
    useEffect(() => { setContent(fakedata2)}, []);
    return (
        <Container>
            <hr className='w-100'/>
            <div className="row">
                <div className="col-md-6">
                   <small>252 stays Apr 13-17 guests</small>
                   <h5>Stay in {title}</h5>
                    {
                        content.map(room => 
                        <div className='row py-2' key={room.id}>
                            <img src={room.image} alt="" className='col-md-6' height='150'/>
                            <div className='col-md-6'>
                                <h6>{room.title}</h6>
                                <small style={{color:'rgb(59, 53, 53)'}}>4 guests   2 bedrooms   2 beds   2 baths <br />
                                Wifi Air conditioning Kitchen <br />
                                Cancellation fexibility availiable</small>
                                <br />
                                <img src={star} alt="" width='13'/>
                                <small style={{fontWeight:'500', fontSize:'12px', marginLeft:'7px'}}>{room.star}</small>
                                <small style={{fontWeight:'500', marginLeft:'20px'}}>${room.price}/<span style={{fontWeight:'300', color:"gray"}}>night</span></small>
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-md-6 text-center">
                    <iframe src={map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={title}></iframe>
                </div>
            </div>
        </Container>
    );
};

export default Destination;