import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css';
import bannerImage from  '../../images/Rectangle 1.png';

const Booking = ({activePlace}) => {
    const{title, description}= activePlace;

    return (
        <>
        <img src={bannerImage} alt="" className='w-100 bannerImage'/>
        <Container>
            <div className='row align-items-center'>
                <div className="col-md-6 text-white px-3 pb-2">
                    <h1 className='p-2' style={{fontWeight:'bolder'}}>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="col-md-6 align-self-center p-5">
                    <Form className='booking-form'>
                        <fieldset>
                            <label htmlFor='origin'>Origin</label> <br />
                            <input type="text" name="" id="origin" defaultValue='DHAKA' required/>
                        </fieldset>
                         <br />
                         <fieldset>
                            <label htmlFor='destination'>Destination</label> <br />
                            <input type="text" name="" id="destination" defaultValue={title} required/>
                         </fieldset>
                         <br />
                         <div className='d-flex'>
                            <fieldset className='me-3'>
                                <label htmlFor='from'>From</label> <br />
                                <input type="date" name="" id="from" required/>
                            </fieldset>
                            <br />
                            <fieldset>
                                <label htmlFor='to'>To</label> <br />
                                <input type="date" name="" id="to" required/>
                            </fieldset>
                         </div>
                        <br />
                        <Link to='/destination'>
                            <button>Start Booking</button>
                        </Link>
                    </Form>
                </div>
            </div>
        </Container>
        </>
    );
};

export default Booking;