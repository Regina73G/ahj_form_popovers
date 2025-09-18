/**
 * @jest-environment jsdom
 */

import Popover from "../../components/popover/popover";

let popover;
let button;

beforeEach(() => {
  button = document.createElement('button');
  button.textContent = 'Click me';
  document.body.append(button);

  popover = new Popover();
});

afterEach(() => {
  // Очистка DOM после каждого теста
  document.body.innerHTML = '';
  popover = null;
});

test('show добавляет поповер в DOM', () => {
  popover.show('Title', 'Message', button);
  const popoverEl = document.querySelector('.popover');

  expect(popoverEl).not.toBeNull();
  expect(popoverEl.querySelector('.popover-title').textContent).toBe('Title');
  expect(popoverEl.querySelector('.popover-content').textContent).toBe('Message');
});

test('hide() удаляет поповер из DOM', () => {
  popover.show('Title', 'Message', button);

  expect(document.querySelector('.popover')).not.toBeNull();

  popover.hide();

  expect(document.querySelector('.popover')).toBeNull();
});

test('show() заменяет существующий поповер', () => {
    popover.show('First', 'Message1', button);

  const firstPopover = document.querySelector('.popover');
  expect(firstPopover.querySelector('.popover-title').textContent).toBe('First');

  popover.show('Second', 'Message2', button);

  const secondPopover = document.querySelector('.popover');
  expect(secondPopover.querySelector('.popover-title').textContent).toBe('Second');
  expect(document.querySelectorAll('.popover').length).toBe(1);
});