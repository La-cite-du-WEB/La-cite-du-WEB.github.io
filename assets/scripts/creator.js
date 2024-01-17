function showImage(color, img) {
  document.querySelector('#expanded-image').src = `/assets/imgs/cats/color/${color}/${img}.webp`;
  document.querySelector('#expanded').style.display = 'block';

  document.querySelector('#expanded').addEventListener('click', () => {
    document.querySelector('#expanded').style.animation = 'scale-out-ver-top 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both';
    setTimeout(() => {
      document.querySelector('#expanded').style.display = 'none';
      document.querySelector('#expanded').style.animation = '';
    }, 500);
  });
}