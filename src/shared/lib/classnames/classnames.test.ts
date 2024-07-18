import { classnames } from 'shared/lib/classnames/classnames';
import { describe, test, expect } from '@jest/globals';

describe('classnames', () => {
  test('with only first param', () => {
    expect(classnames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classnames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classnames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classnames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']),
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classnames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']),
    ).toBe(expected);
  });
});
