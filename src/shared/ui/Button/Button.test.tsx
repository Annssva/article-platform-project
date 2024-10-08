/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { describe, test } from '@jest/globals';

describe('Button', () => {
  test('test renser', () => {
    render(<Button> TEST </Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}> TEST </Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
