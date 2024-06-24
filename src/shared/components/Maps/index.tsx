import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';

import { useState } from 'react';

import s from './maps.module.css';

// Байкал расположен почти в центре Азии в пределах 51°29′– 55°46′ с. ш. и 103°43′–109°58′ в. д. Длина озера 636 км, максимальная ширина 81 км, длина береговой линии около 2000 км. Площадь 31 500 км 2 . По площади Байкал занимает 7-е место среди озер мира после Каспия, Виктории, Танганьики, Гурона, Мичигана и Верхнего. Байкал самое глубокое в мире озеро – 1637 м, его средняя глубина равна 730 м.

import Cherepakha from 'assets/images/cherepakha.jpg';
import Listvianka from 'assets/images/listvianka.jpg';
import Shamanka from 'assets/images/shamanka.jpg';

// import myIcon from "./map.png";
import myIcon from 'assets/icons/location.svg';

const points = [
  {
    id: 1,
    coordinates: [52.969670851848676, 108.2421621533966],
    hint: 'Камень Черепаха',
    link: '/',
    image: Cherepakha,
    address: 'Республика Бурятия, Прибайкальский район',
  },
  {
    id: 2,
    coordinates: [51.8617080602347,104.86633332738097],
    hint: 'Листвянка',
    link: '/',
    image: Listvianka,
    address: 'Иркутская область',
  },
  {
    coordinates: [53.20421787473983,107.33849961924828],
    id: 3,
    hint: 'Скала Шаманка',
    link: '/',
    image: Shamanka,
    address: 'Иркутская область, остров Ольхон',
  },
  {
    coordinates: [59.91, 30.22],
    id: 4,
    hint: '',
    link: '/',
    image: Image,
    address: '',
  },
  {
    coordinates: [59.93, 30.23],
    id: 5,
    hint: '',
    link: '/',
    image: Image,
    address: '',
  },
  {
    coordinates: [59.94, 30.25],
    id: 6,
    hint: '',
    link: '/',
    image: Image,
    address: '',
  },
  {
    coordinates: [59.95, 30.21],
    id: 7,
    hint: '',
    link: '/',
    image: Image,
    address: '',
  },
];

export const Maps = () => {
  return (
    <YMaps>
      <div className={s.map_container}>
        <Map
          width="100%"
          height="740px"
          defaultState={{
            center: [53.7, 108.0],
            zoom: 6.5,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={[
            'control.ZoomControl',
            'control.FullscreenControl',
            'geoObject.addon.balloon',
            'geoObject.addon.hint',
          ]}
        >
          {points.map(point => (
            <Placemark
              key={point.id}
              defaultGeometry={point.coordinates}
              properties={{
                // hintContent: point.hint,
                // iconCaption: "caption",
                balloonContentHeader: `<a href = "${point.link}" class="map_link">${point.hint}</a>`,
                balloonContentBody: `<div class="map_content_body"} ><img src="${point.image}" class="map_image"  height="150" width="200"> <br/>
                <div class="description">${point.address}</div>
                <a href = "${point.link}" class="map_button">Подробнее</a></div>`,
                // balloonContentFooter: "footer"
              }}
              options={{
                iconLayout: 'default#image',
                iconColor: '#000', 
                // iconImageHref: myIcon,
                // iconImageSize: [40, 40],
                // iconImageOffset: [-20, -20]
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};