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
      src: 'EMERGENCY',
    },
    {
      key: 2,
      title: 'SMS',
      img: sos,
      data: 'Give SOS message to your emergency contacts',
      src: 'SOS',
    },
    {
      key: 3,
      title: 'Tips',
      img: tips,
      data: 'Get tips for emergency situations',
      src: 'TIPS',
    },
  ],
  safetyTips: [
    {
      category: 'Fire Accident',
      tips: [
        'Install smoke detectors on every level of your home and test them regularly.',
        'Keep flammable materials away from heat sources and open flames.',
        'Have a fire extinguisher readily available and know how to use it.',
        'Create a fire escape plan for your home and practice it with your family.',
        'In the event of a fire, get out of the building as quickly as possible and call emergency services.',
      ],
    },
    {
      category: 'Car Accident',
      tips: [
        'Always wear your seatbelt and ensure all passengers do the same.',
        'Obey traffic laws, speed limits, and avoid aggressive driving.',
        'Avoid distractions while driving, such as using mobile phones or eating.',
        'Maintain a safe following distance from the vehicle in front of you.',
        'Be cautious at intersections and look for pedestrians or cyclists before turning or changing lanes.',
      ],
    },
    {
      category: 'Gas Accident',
      tips: [
        'Install carbon monoxide detectors in your home, especially near bedrooms.',
        'Never use gas appliances if you suspect a gas leak; leave the area immediately and call emergency services.',
        'Regularly inspect and maintain gas appliances, ensuring proper ventilation and no leaks.',
        'Do not store flammable materials near gas appliances or cylinders.',
        'Educate yourself and your family on gas safety procedures and emergency protocols.',
      ],
    },
    {
      category: 'Extreme Rainfall',
      tips: [
        'Monitor weather forecasts and stay informed about potential flooding or severe rainfall in your area.',
        'Clear gutters, drains, and downspouts to ensure proper water flow.',
        'Avoid driving through flooded areas and find alternative routes if necessary.',
        'Secure or move valuable belongings to higher ground if flooding is expected.',
        'Have emergency supplies on hand, including food, water, flashlights, and a battery-powered radio.',
      ],
    },
  ],
  Servicedata: [
    {
      key: 1,
      title: 'Ambulance',
      img: hospital,
      data: 'Get in touch with hospital in need of medical assistance',
      number: '108',
    },
    {
      key: 2,
      title: 'Police',
      img: police,
      data: 'Contact nearby police station if in danger',
      number: '100',
    },
    {
      key: 3,
      title: 'FireFighters',
      img: firetruck,
      data: 'Call FireFighters in case of Fire',
      number: '112',
    },
  ],
};
