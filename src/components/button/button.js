import './button.css';

export default class Button {
  constructor({
    parentEl,
    text = 'Кнопка',
    className = '',
    type = 'button',
    onClick = null,
  }) {
    this.el = document.createElement('button');
    this.el.classList.add('btn');

    if(className) {
      this.el.classList.add(...className.split(' '));
    }

    this.el.textContent = text;
    this.el.type = type;

    if( typeof onClick === 'function') { // событие click по умолчанию
      this.el.addEventListener('click', onClick);
    }

    if (parentEl) {
      parentEl.append(this.el);
    }
  }

  setText(text) { // метод для смены текста
    this.el.textContent = text;
  }

  on(event, handler) { // метод для добавления кастомного события
    this.el.addEventListener(event, handler);
  }

  remove() { // метод для удаления кнопки
    this.el.remove();
  }
}