import menu from '../assets/pngs/menu.png';
import logo from '../assets/pngs/logo.jpg';
import emergency from '../assets/pngs/Emergency.png';
import sos from '../assets/pngs/sos.jpg';
import tips from '../assets/pngs/tips.png';
import home from '../assets/pngs/home.png';
import profile from '../assets/pngs/profile.png';
import map from '../assets/pngs/map.png';
import mapbg from '../assets/pngs/map_background.jpg';
import police from '../assets/pngs/police.png';
import hospital from '../assets/pngs/hospital.png';
import logo1 from '../assets/pngs/Logosmall.png';
import image1 from '../assets/pngs/MainImage.png';
import next from '../assets/pngs/next.png';
import firetruck from '../assets/pngs/firetruck.png';
export default {
  menu: menu,
  logo: logo,
  logo1: logo1,
  image1: image1,
  next: next,
  police: police,
  hospital: hospital,
  firetruck: firetruck,
  home: home,
  profile: profile,
  map: map,
  mapbg: mapbg,
  data: [
    {
      key: 1,
      title: 'Emergency Services',
      img: emergency,
      data: 'Get in touch with emergency services',
    },
    {
      key: 2,
      title: 'SMS',
      img: sos,
      data: 'Give SOS message to your emergency contacts',
    },
    {
      key: 3,
      title: 'Tips',
      img: tips,
      data: 'Get tips for emergency situations',
    },
  ],
};
