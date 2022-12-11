const setElementDisplay = (element, display) => {
  document.querySelector(element).style.display = display;
};

// button for ears
const buttonEars = document.querySelectorAll('#button-ear');

buttonEars.forEach((buttonEar) => {
  buttonEar.addEventListener('click', () => {
    buttonEar.disabled = true;
    setElementDisplay('.mumma-ear', 'block');
    setTimeout(() => {
      setElementDisplay('.mumma-ear', 'none');
    }, 2000);
    buttonEar.disabled = false;
  });
});

// button for nose
const buttonNose = document.querySelector('#button-nose');

buttonNose.addEventListener('click', () => {
  buttonNose.disabled = true;
  setElementDisplay('.mumma-nose', 'block');
  setTimeout(() => {
    setElementDisplay('.mumma-nose', 'none');
  }, 2000);
  buttonNose.disabled = false;
});

// button for paw
const buttonPaw = document.querySelector('#button-paw');

buttonPaw.addEventListener('click', () => {
  buttonPaw.disabled = true;
  setElementDisplay('.mumma-paw', 'block');
  setTimeout(() => {
    setElementDisplay('.mumma-paw', 'none');
  }, 2000);
  buttonPaw.disabled = false;
});

// button for belly
const buttonBelly = document.querySelector('#button-belly');

buttonBelly.addEventListener('click', () => {
  buttonBelly.disabled = true;
  setElementDisplay('.left-slash', 'block');
  setElementDisplay('.right-slash', 'block');
  setElementDisplay('.mumma-belly', 'flex');
});

// button for back
const buttonBack = document.querySelector('#button-back');

buttonBack.addEventListener('click', async () => {
  buttonBack.disabled = true;
  const message = 'purr purr...';
  const mummaBack = document.querySelector('.mumma-back');

  const messageLetters = message.split('');

  const promises = messageLetters.map((letter, index) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const back = document.querySelector('.mumma-back');
        back.textContent += letter;
        resolve();
      }, 100 + 150 * index);
    });

    return promise;
  });

  const awaited = await Promise.all(promises);

  mummaBack.textContent = '';
  buttonBack.disabled = false;
});
