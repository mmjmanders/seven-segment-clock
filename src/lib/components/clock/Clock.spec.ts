import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import Clock from './Clock.svelte';
import { cleanup, render, type RenderResult } from '@testing-library/svelte';

describe('Clock', () => {
  let clock: RenderResult<Clock>;

  beforeEach(() => {
    clock = render(Clock);
  });

  afterEach(() => {
    cleanup();
  });

  it('Clock is defined', () => {
    expect(clock).toBeTruthy();
  });

  it('Clock has class clock', () => {
    expect(clock.container.querySelector('.clock')).toBeTruthy();
  });
});
