import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import { cleanup, render, type RenderResult } from '@testing-library/svelte';
import Dots from '$lib/components/dots/Dots.svelte';

describe('Dots', () => {
  let dots: RenderResult<Dots>;

  beforeEach(() => {
    dots = render(Dots, { on: true });
  });

  afterEach(() => {
    cleanup();
  });

  it('Dots is defined', () => {
    expect(dots).toBeTruthy();
  });

  it('Dots has class clock', () => {
    expect(dots.container.querySelectorAll('circle')).toHaveLength(2);
  });
});
