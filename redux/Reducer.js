import MonitorIcon  from '../assets/svgIcons/MonitorIcon';
import ArchiveIcon  from '../assets/svgIcons/ArchiveIcon';
import YoutubeIcon  from '../assets/svgIcons/YoutubeIcon';
import RadioIcon    from '../assets/svgIcons/RadioIcon';
import RotateIcon   from '../assets/svgIcons/RotateIcon';
import DiscIcon     from '../assets/svgIcons/DiscIcon';
import ClockIcon    from '../assets/svgIcons/ClockIcon';
import MaximizeIcon from '../assets/svgIcons/MaximizeIcon';
const image1 = require("../assets/images/001.png");
const image2 = require("../assets/images/002.png");
const image3 = require("../assets/images/003.png");
const image4 = require("../assets/images/004.png");
const image5 = require("../assets/images/005.png");

const INITIAL_STATE = {
  leftBarSelectedId: 1,
  leftBar: [
    {
      id: 1,
      icon: <MonitorIcon/>,
      title: 'TV on direct'
    },
    {
      id: 2,
      icon: <ArchiveIcon/>,
      title: 'VOD'
    },
    {
      id: 3,
      icon: <YoutubeIcon/>,
      title: 'Series TV'
    },
    {
      id: 4,
      icon: <RadioIcon/>,
      title: 'radio'
    },
    {
      id: 5,
      icon: <RotateIcon/>,
      title: 'Actualiser'
    },
    {
      id: 6,
      icon: <DiscIcon/>,
      title: 'Enregistrements'
    },
    {
      id: 7,
      icon: <ClockIcon/>,
      title: 'Programation'
    },
  ],
  MainScreen: [
    {
      id: 1,
      list: [
        {
          id: 1,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 2,
          image: image2,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 3,
          image: image3,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 4,
          image: image4,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 5,
          image: image5,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 6,
          image: image2,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 7,
          image: image3,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 8,
          image: image4,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 9,
          image: image3,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 10,
          image: image4,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 11,
          image: image5,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 12,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 13,
          image: image5,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 14,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 15,
          image: image3,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 16,
          image: image4,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 17,
          image: image5,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 18,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 19,
          image: image2,
          title: 'Marmax',
          date: '2021, December'
        },
      ]
    },
    {
      id: 2,
      list: [
        {
          id: 1,
          image: image5,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 2,
          image: image4,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 3,
          image: image2,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 4,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 5,
          image: image3,
          title: 'Marmax',
          date: '2021, December'
        },
      ]
    },
    {
      id: 3,
      list: [
        {
          id: 1,
          image: image4,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 2,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 3,
          image: image5,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 4,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 5,
          image: image3,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 6,
          image: image4,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 7,
          image: image5,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 8,
          image: image1,
          title: 'Marmax',
          date: '2021, December'
        },
        {
          id: 9,
          image: image2,
          title: 'Marmax',
          date: '2021, December'
        },
      ]
    },
  ]
};

export default Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LEFTBAR_SELECT":
      state.leftBarSelectedId = action.payload.id
      return { ...state };
    default:
      return state;
  }
};
