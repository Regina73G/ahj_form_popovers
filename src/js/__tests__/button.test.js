/**
 * @jest-environment jsdom
 */

import Button from "../../components/button/button";

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.innerHTML = '';
  container = null;
});

test('Button создает кнопку с дефолтным текстом и классом', () => {
  new Button({ parentEl: container });

  const el = container.querySelector('button');
  expect(el).not.toBeNull();
  expect(el.textContent).toBe('Кнопка');
  expect(el.classList.contains('btn')).toBe(true);
  expect(el.type).toBe('button');
});

test('Button добавляет кастомный текст, класс и тип', () => {
  new Button({
    parentEl: container,
    text: 'Нажми',
    className: 'red',
    type: 'submit'
  });

  const el = container.querySelector('button');
  expect(el.textContent).toBe('Нажми');
  expect(el.classList.contains('btn')).toBe(true);
  expect(el.classList.contains('red')).toBe(true);
  expect(el.type).toBe('submit');
});

test('Button вызывает переданный onClick обработчик', () => {
  const mockFn = jest.fn();

  new Button({
    parentEl: container,
    onClick: mockFn
  });

  const el = container.querySelector('button');
  el.click();

  expect(mockFn).toHaveBeenCalled();
});

test('метод setText изменяет текст кнопки', () => {
  const button = new Button({ parentEl: container });
  button.setText('Новый текст');

  expect(container.querySelector('button').textContent).toBe('Новый текст');
});

test('метод on добавляет кастомное событие', () => {
  const button = new Button({ parentEl: container });
  const mockFn = jest.fn();

  button.on('dblclick', mockFn);

  const el = container.querySelector('button');
  const event = new Event('dblclick');
  el.dispatchEvent(event);

  expect(mockFn).toHaveBeenCalled();
});

test('метод remove удаляет кнопку из DOM', () => {
  const button = new Button({ parentEl: container });
  button.remove();

  expect(container.querySelector('button')).toBeNull();
});