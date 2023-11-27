<script lang="ts">
  const segments = [
    0b1111110, 0b0110000, 0b1101101, 0b1111001, 0b0110011, 0b1011011, 0b1011111,
    0b1110000, 0b1111111, 0b1111011,
  ] as const;

  export let current: number;

  $: fill = (id: number) =>
    ((1 << (6 - id)) & segments[current]) > 0 ? 'on' : 'off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="96"
  height="160"
  viewBox="-1 -1 12 20"
  stroke="var(--bs-body-bg)"
  stroke-width=".25"
>
  <polygon id="a" class={fill(0)} points="1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" />
  <polygon id="b" class={fill(1)} points="9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" />
  <polygon id="c" class={fill(2)} points="9, 9 10,10 10,16  9,17  8,16  8,10" />
  <polygon id="d" class={fill(3)} points="9,17  8,18  2,18  1,17  2,16  8,16" />
  <polygon id="e" class={fill(4)} points="1,17  0,16  0,10  1, 9  2,10  2,16" />
  <polygon id="f" class={fill(5)} points="1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" />
  <polygon id="g" class={fill(6)} points="1, 9  2, 8  8, 8  9, 9  8,10  2,10" />
</svg>

<style lang="scss">
  svg {
    flex-grow: 1;
    aspect-ratio: 3 / 5;
    width: 100%;
    height: auto;
  }
</style>
