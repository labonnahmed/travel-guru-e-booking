import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Auth from '../Authentication/Auth';
import Booking from '../Booking/Booking';
import Destination from '../Destination/Destination';
import Main from '../Main/Main';
import PrivateOutlet from '../PrivateOutlet/PrivateOutlet';

const Home = () => {
    const [activePlace, setactivePlace] = useState({   
        id: 1,
        title: "SAJEK",
        description: "Sajek valley is famous for its natural beauty. The valley is surrounded by mountains, dense forest, grasslands hilly tracks. Many small rivers flow through the mountains among which Kachalong and Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and Mayni river.",
        image: "https://i.postimg.cc/NFXrLhHv/Sajek.png",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.0983221236525!2d92.28960421497449!3d23.384660084770886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752feb9eb8c7313%3A0xf1d07a0cc84f174c!2sSajek%20Valley!5e0!3m2!1sen!2sbd!4v1672291948625!5m2!1sen!2sbd"
      });

    return (      
        <Routes>
            <Route path='/' element={ <Main activePlace={activePlace} setactivePlace={setactivePlace} /> } />
            <Route path='/booking' element={<Booking activePlace={activePlace}/>} />
            <Route path='/*' element= { <PrivateOutlet /> }>
                <Route path='destination' element={ <Destination activePlace={activePlace}/> } />
            </Route>
            <Route path='/login' element={ <Auth />} />
        </Routes> 
    );
};

export default Home;