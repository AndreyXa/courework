ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    'map',
    {
      center: [55.76, 37.64],
      zoom: 10,
    },
    {
      searchControlProvider: 'yandex#search',
    }
  );
  myMap.geoObjects
    .add(
      new ymaps.Placemark(
        [55.684758, 37.738521],
        {
          balloonContentHeader: '<h1>Binco</h1>',
          balloonContentBody:
            '<p>Adress: st. Petrova 21</p><br>' +
            '<div class="slider">' +
            '<div class="item">' +
            ' <img src="img/1.jpeg" alt="Первый слайд" />' +
            '' +
            '</div>' +
            '<div class="item">' +
            '<img src="img/2.jpg" alt="Второй слайд" />' +
            ' </div>' +
            '<div class="item">' +
            '<img src="img/3.jpg" alt="Третий слайд" />' +
            '</div>' +
            '<a class="prev" onclick="minusSlide()">&#10094;</a>' +
            '<a class="next" onclick="plusSlide()">&#10095;</a>' +
            '</div>' +
            '<div class="slider-dots">' +
            '<span class="slider-dots_item" onclick="currentSlide(1)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(2)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(3)"></span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ' </div>',
          iconCaption: 'Binco',
        },
        {
          preset: 'islands#yellowFashionIcon',
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [55.833436, 37.715175],
        {
          balloonContentHeader: '<h1>Westfield Century City</h1>',
          balloonContentBody:
            '<p>Adress: Santa Monica Blvd, Los Angeles, CA 90067</p><br>' +
            '<div class="slider">' +
            '<div class="item">' +
            ' <img src="img/4.jpg" alt="Первый слайд" />' +
            '' +
            '</div>' +
            '<div class="item">' +
            '<img src="img/5.jpg" alt="Второй слайд" />' +
            ' </div>' +
            '<div class="item">' +
            '<img src="img/6.jpg" alt="Третий слайд" />' +
            '</div>' +
            '<a class="prev" onclick="minusSlide()">&#10094;</a>' +
            '<a class="next" onclick="plusSlide()">&#10095;</a>' +
            '</div>' +
            '<div class="slider-dots">' +
            '<span class="slider-dots_item" onclick="currentSlide(4)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(5)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(6)"></span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ' </div>',
          iconCaption: 'Westfield Centry City',
        },
        {
          preset: 'islands#violetPocketIcon',
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [55.687086, 37.529789],
        {
          balloonContentHeader: '<h1>The Grove</h1>',
          balloonContentBody:
            '<p>Adress: The Grove Dr, Los Angeles, CA 90036</p><br>' +
            '<div class="slider">' +
            '<div class="item">' +
            ' <img src="img/7.jpg" alt="Первый слайд" />' +
            '' +
            '</div>' +
            '<div class="item">' +
            '<img src="img/8.jpg" alt="Второй слайд" />' +
            ' </div>' +
            '<div class="item">' +
            '<img src="img/9.jpg" alt="Третий слайд" />' +
            '</div>' +
            '<a class="prev" onclick="minusSlide()">&#10094;</a>' +
            '<a class="next" onclick="plusSlide()">&#10095;</a>' +
            '</div>' +
            '<div class="slider-dots">' +
            '<span class="slider-dots_item" onclick="currentSlide(7)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(8)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(9)"></span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ' </div>',
          iconCaption: 'The Grove',
        },
        {
          preset: 'islands#nightCinemaIcon',
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [55.782392, 37.614924],
        {
          balloonContentHeader: '<h1>Los Angeles Valley College</h1>',
          balloonContentBody:
            '<p>Adress: 5800 Fulton Ave, Van Nuys, CA 91401</p><br>' +
            '<div class="slider">' +
            '<div class="item">' +
            ' <img src="img/10.jpg" alt="Первый слайд" />' +
            '' +
            '</div>' +
            '<div class="item">' +
            '<img src="img/11.jpg" alt="Второй слайд" />' +
            ' </div>' +
            '<div class="item">' +
            '<img src="img/12.jpg" alt="Третий слайд" />' +
            '</div>' +
            '<a class="prev" onclick="minusSlide()">&#10094;</a>' +
            '<a class="next" onclick="plusSlide()">&#10095;</a>' +
            '</div>' +
            '<div class="slider-dots">' +
            '<span class="slider-dots_item" onclick="currentSlide(10)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(11)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(12)"></span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ' </div>',
          iconCaption: 'Los Angeles Velley College',
        },
        {
          preset: 'islands#greenLeisureIcon',
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [55.642063, 37.656123],
        {
          balloonContentHeader: '<h1>Sandy shores medical center</h1>',
          balloonContentBody:
            '<p>Adress: 6830 Reseda Boulevard Reseda, CA 91335</p><br>' +
            '<div class="slider">' +
            '<div class="item">' +
            ' <img src="img/13.jpg" alt="Первый слайд" />' +
            '' +
            '</div>' +
            '<a class="prev" onclick="minusSlide()">&#10094;</a>' +
            '<a class="next" onclick="plusSlide()">&#10095;</a>' +
            '</div>' +
            '<div class="slider-dots">' +
            '<span class="slider-dots_item" onclick="currentSlide(13)"></span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ' </div>',
          iconCaption: 'Sandy shore medical center',
        },
        {
          preset: 'islands#redMedicalIcon',
        }
      )
    )
    .add(
      new ymaps.Placemark(
        [55.826479, 37.487208],
        {
          balloonContentHeader: '<h1>Mint Lounge Center</h1>',
          balloonContentBody:
            '<p>Adress: 5887 Fulton Ave, Van Nuys, CA 95954</p><br>' +
            '<div class="slider">' +
            '<div class="item">' +
            ' <img src="img/14.jpg" alt="Первый слайд" />' +
            '' +
            '</div>' +
            '<div class="item">' +
            '<img src="img/15.jpg" alt="Второй слайд" />' +
            ' </div>' +
            '<div class="item">' +
            '<img src="img/16.jpg" alt="Третий слайд" />' +
            '</div>' +
            '<a class="prev" onclick="minusSlide()">&#10094;</a>' +
            '<a class="next" onclick="plusSlide()">&#10095;</a>' +
            '</div>' +
            '<div class="slider-dots">' +
            '<span class="slider-dots_item" onclick="currentSlide(14)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(15)"></span>' +
            '<span class="slider-dots_item" onclick="currentSlide(16)"></span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            ' </div>',
          iconCaption: 'Mint Lounge',
        },
        {
          preset: 'islands#blueBarIcon',
        }
      )
    );
}
