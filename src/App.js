import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Box, Typography } from '@mui/material';
import SearchBar from "./Components/SearchBar";
import FeaturedStores from "./Components/FeaturedStores ";
import bookingImage from './assets/images/originals/stores/Booking_com_1601290906.jpg';
import hostingerImage from './assets/images/originals/stores/Hostinger_1690954111.png';
import dellImage from './assets/images/originals/stores/Dell_1667026656.png';
import udemyImage from './assets/images/originals/stores/Udemy_1626526862.jpg';
import agodaImage from './assets/images/originals/stores/agodastorelogo_1497266707.jpg';
import nykaaImage from './assets/images/originals/stores/nykaa_1498128228.jpg';
import Footer from "./Components/Footer";

function App() {
  const auth = JSON.parse(localStorage.getItem("user"));
  const [isAuth, setisAuth] = useState(auth ? auth : null)

  const stores = [
    { name: 'Booking com', imageSrc: bookingImage, couponCount: 52, link: '#' },
    { name: 'Hostinger', imageSrc: hostingerImage, couponCount: 73, link: '#' },
    { name: 'Dell', imageSrc: dellImage, couponCount: 30, link: '#' },
    { name: 'Udemy', imageSrc: udemyImage, couponCount: 49, link: '#' },
    { name: 'Agoda', imageSrc: agodaImage, couponCount: 33, link: '#' },
    { name: 'Nykaa', imageSrc: nykaaImage, couponCount: 43, link: '#' },
    { name: 'Booking com', imageSrc: bookingImage, couponCount: 52, link: '#' },
    { name: 'Hostinger', imageSrc: hostingerImage, couponCount: 73, link: '#' },
    { name: 'Dell', imageSrc: dellImage, couponCount: 30, link: '#' },
    { name: 'Udemy', imageSrc: udemyImage, couponCount: 49, link: '#' },
    { name: 'Agoda', imageSrc: agodaImage, couponCount: 33, link: '#' },
    { name: 'Nykaa', imageSrc: nykaaImage, couponCount: 43, link: '#' },
    { name: 'Booking com', imageSrc: bookingImage, couponCount: 52, link: '#' },
    { name: 'Hostinger', imageSrc: hostingerImage, couponCount: 73, link: '#' },
    { name: 'Dell', imageSrc: dellImage, couponCount: 30, link: '#' },

  ];

  return (
    <div className="App" >
      <Navbar />
      <Box className="content">
        <div>

          <Typography variant="h4">Welcome to Your Website</Typography>
          <br />
          <SearchBar />
        </div>

      </Box>
      <div style={{ marginTop: "-10%", paddingBottom: "5%" }}>
        <FeaturedStores stores={stores} />
      </div>
      <Footer />
    </div>

  );
}

export default App;


