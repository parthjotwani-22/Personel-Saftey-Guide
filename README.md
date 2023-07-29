
# Personal Safety Guide 

The application available on android/ios helps its user to save their life in life threatening situations like an accident,theft or burning house and many others. This application shares the user’s live location and sends it to their mentioned emergency contacts through SMS text. This application also provides the user their nearby locations and contact numbers of emergency services like hospitals or fire stations using SMS text. This application also provides the user some common useful emergency tips of first aid or self-defense tips like providing CPR , treating frostbite or burn wounds.



## Tech Stack

**Client:** React Native, Redux, CSS

**Server:** Node, Express, MongoDB


## Installation

Install Personal Safety Guide with npm

```bash
cd Personel
npm install
react-native start
```
    
## Features

- User Login
- Map Functionality(Using Google Api)
- SMS Functionality(Twilio)
- Cross platform
- Emergency Service Number and Tips


## FAQ

#### How Does it send SMS

Using twilio api integrated in a way to message more than one person at the same time 

#### Future Improvements

->Will add a way to find the closest police station,hospital etc.

->Improve UI


## Screenshots

![Login]([https://drive.google.com/file/d/1QLQK_8HrRJnc1yevq_OG1U5MrCM1575O/view](https://drive.google.com/open?id=1nRQic0tw_ikmptwH-utRkzWotRHDhWTC&usp=drive_copy))
![Home Page](https://drive.google.com/file/d/1nRQic0tw_ikmptwH-utRkzWotRHDhWTC/view?usp=sharing)
![Map](https://drive.google.com/file/d/1Co4vV0Jv3oqYXBYJxtxJ7XNtgk4VkdgX/view?usp=sharing)
![SMS]((https://drive.google.com/file/d/1Co4vV0Jv3oqYXBYJxtxJ7XNtgk4VkdgX/view?usp=sharing))


## Demo

https://drive.google.com/file/d/1bjWOtXLakbluTuT4j620BDiHxiBacHPZ/view?usp=sharing


## API Reference

#### Post User Data

```http
  POST /user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `Object` | **Required**. User Data |

#### Send SMS 

```http
  POST /message
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `numbers`      | `array` | **Required**. Numbers to send message |




## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/parth-jotwani-b73a38226)

