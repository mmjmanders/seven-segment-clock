<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  let interval: number;
  let on = true;

  onMount(() => {
    interval = window.setInterval(() => {
      on = !on;
    }, 500);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  $: fill = on ? 'on' : 'off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="160"
  viewBox="0 0 48 150"
  stroke="#FFF"
  stroke-width=".25"
>
  <circle cx="24" cy="50" r="10" class={fill} />
  <circle cx="24" cy="100" r="10" class={fill} />
</svg>
