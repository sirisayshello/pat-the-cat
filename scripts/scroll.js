const spinObject = (e) => {
  const catImages = document.querySelectorAll('.cat-container img');
  catImages.forEach((catImg) => {
    catImg.style.transform = `rotate(${window.scrollY}deg)`;
  });
};

window.addEventListener('scroll', spinObject);
