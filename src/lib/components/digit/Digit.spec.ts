import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';
import Digit from './Digit.svelte';

describe('Digit', () => {
  afterEach(() => {
    cleanup();
  });

  it('Digit is defined', () => {
    expect(render(Digit, { current: 9 })).toBeTruthy();
  });

  it('Digit has all segments filled for an 8', () => {
    const { container } = render(Digit, { current: 8 });
    const segments = container.querySelectorAll('polygon[fill="#F00"]');
    expect(segments).toHaveLength(7);
  });

  it('Digit has all but one segments filled for a 0', () => {
    const { container } = render(Digit, { current: 0 });
    const segments = container.querySelectorAll('polygon[fill="#F00"]');
    expect(segments).toHaveLength(6);
  });
});