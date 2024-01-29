const apiBaseUrl = 'https://api.noroff.dev/api/v1/rainy-days';


function fetchRainyDaysData() {
    fetch(apiBaseUrl)
      .then((response) => {
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          return response.text(); // Get the response text for debugging
        }
        return response.json();
      })
      .then((data) => {
        if (typeof data === 'string') {
          console.error('API Response (text):', data); // Log the response text
        } else {
          // Handle the API response data here
          console.log(data);
          displayRainyDaysData(data);
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  }
  
  
  // Функция для отображения данных на странице
  function displayRainyDaysData(data) {
    const bestsellersForMen = document.querySelector('.bestsellers .col:first-child');
    const bestsellersForWomen = document.querySelector('.bestsellers .col:last-child');
  
    // Очищаем секции "Bestsellers for men" и "Bestsellers for women"
    bestsellersForMen.innerHTML = '';
    bestsellersForWomen.innerHTML = '';
  
    // Перебираем данные и создаем элементы для отображения продуктов
    data.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('image-item');
  
      const productLink = document.createElement('a');
      productLink.href = 'jack.html';
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.title;
  
      const productTitle = document.createElement('p');
      productTitle.textContent = product.title;
  
      productLink.appendChild(productImage);
      productItem.appendChild(productLink);
      productItem.appendChild(productTitle);
  
      if (product.gender === 'Male') {
        bestsellersForMen.appendChild(productItem);
      } else if (product.gender === 'Female') {
        bestsellersForWomen.appendChild(productItem);
      }
    });
  }
  
  // Вызываем функцию для загрузки данных с API Rainy Days
  fetchRainyDaysData();




  
  // Fetch data and images, and then create the carousel
function createCarousel(data) {
    const carouselInner = $('.carousel-inner');
  
    data.forEach((item, index) => {
      const slide = $('<div>').addClass('carousel-item');
      if (index === 0) {
        slide.addClass('active');
      }
  
      const image = $('<img>').attr('src', item.image).attr('alt', item.title);
      const caption = $('<div>').addClass('carousel-caption').text(item.title);
  
      slide.append(image).append(caption);
      carouselInner.append(slide);
    });
  
    // Initialize the carousel
    $('.carousel').carousel();
  }
  
  // Fetch your data and call createCarousel when data is available
  fetch(apiBaseUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      createCarousel(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  