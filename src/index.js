import './sass/main.scss';

function addZeros(number, length) {
  let num = '' + number;
  while (num.length < length) {
    num = '0' + num;
  }
  return num;
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerElement = document.querySelector(selector);

    this.tick(targetDate - Date.now());
    this.interval = setInterval(() => {
      this.tick(targetDate - Date.now());
    }, 1000);
  }

  tick(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.timerElement.querySelectorAll('.value').forEach(element => {
      const dataValue = element.getAttribute('data-value');

      switch (dataValue) {
        case 'days':
          element.innerText = addZeros(days, 2);
          break;
        case 'hours':
          element.innerText = addZeros(hours, 2);
          break;
        case 'mins':
          element.innerText = addZeros(mins, 2);
          break;
        case 'secs':
          element.innerText = addZeros(secs, 2);
          break;
      }
    });
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
