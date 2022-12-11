// button for cat-message
const catMessage = {
  ear: 'prrrt...',
  nose: 'boop...',
  tail: 'meow...',
  back: 'purr purr...',
};
const messageContainer = document.querySelector('.mumma-message');

const setElementDisplay = (element, display) => {
  document.querySelector(element).style.display = display;
};

const showMessage = async (button, message) => {
  button.disabled = true;

  const messageLetters = message.split('');

  const promises = messageLetters.map((letter, index) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        messageContainer.textContent += letter;
        resolve();
      }, 100 + 150 * index);
    });

    return promise;
  });

  await Promise.all(promises);

  messageContainer.textContent = '';
  button.disabled = false;
};

// button for ears
const buttonEars = document.querySelectorAll('#button-ear');

buttonEars.forEach((buttonEar) => {
  buttonEar.addEventListener('click', () =>
    showMessage(buttonEar, catMessage.ear)
  );
});

// button for nose
const buttonNose = document.querySelector('#button-nose');

buttonNose.addEventListener('click', () => {
  showMessage(buttonNose, catMessage.nose);
});

// button for paw
const buttonPaw = document.querySelector('#button-tail');

buttonPaw.addEventListener('click', () => {
  showMessage(buttonPaw, catMessage.tail);
});

// button for belly
const buttonBelly = document.querySelector('#button-belly');

buttonBelly.addEventListener('click', () => {
  buttonBack.disabled = true;
  setElementDisplay('.left-slash', 'block');
  setElementDisplay('.right-slash', 'block');
  setElementDisplay('.mumma-belly', 'flex');
});

// button for back
const buttonBack = document.querySelector('#button-back');

buttonBack.addEventListener('click', async () => {
  showMessage(buttonBack, catMessage.back);
});
