import './popover.css';

export default class Popover {
  constructor() {
    this.popover = null;
  }

  show(title, message, element) {
    this.hide();

    const popover = document.createElement('div');
    popover.classList.add('popover');

    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popover-title');
    popoverTitle.textContent = title;

    const popoverContent = document.createElement('div');
    popoverContent.classList.add('popover-content');
    popoverContent.textContent = message;

    popover.append(popoverTitle, popoverContent);
    document.body.append(popover);

    const { left, top } = element.getBoundingClientRect();

    popover.style.left = left + element.offsetWidth / 2 + - popover.offsetWidth / 2 + 'px';
    popover.style.top = top - popover.offsetHeight - 10 + 'px';

    this.popover = popover;
  }

  hide() {
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
    }
  }
}