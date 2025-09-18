import Popover from '../components/popover/popover.js';
import Button from '../components/button/button.js';

const container = document.querySelector('body');

const button = new Button({parentEl: container, text: 'Сlick to view the popover', className: 'popover-btn'});

const popover = new Popover();

button.on('click', () => {
  if (popover.popover) {
    popover.hide();
  } else {
    popover.show('Popover title', 'And here’s some amazing content.', button.el);
  }
});