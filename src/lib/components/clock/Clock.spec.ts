import { beforeEach, describe, expect, it } from 'vitest';
import Clock from './Clock.svelte';
import { render, type RenderResult } from '@testing-library/svelte';

describe('Clock', () => {
  let clock: RenderResult<Clock>;

  beforeEach(() => {
    clock = render(Clock);
  });

  it('Clock is defined', () => {
    expect(clock).toBeTruthy();
  });

  it('Clock has class clock', () => {
    expect(clock.container.querySelector('.clock')).toBeTruthy();
  });
});
