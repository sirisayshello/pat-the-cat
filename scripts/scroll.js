const spinObject = () => {
  const catImages = document.querySelectorAll('.cat-container img');
  catImages.forEach((catImg) => {
    catImg.classList.add('spin');
  });
};

window.addEventListener('scroll', spinObject);
