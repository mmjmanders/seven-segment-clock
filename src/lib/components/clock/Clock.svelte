<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Digit from '$lib/components/digit/Digit.svelte';
  import Dots from '$lib/components/dots/Dots.svelte';

  let time = new Date();
  let interval: number;
  let on = true;

  onMount(() => {
    interval = window.setInterval(() => {
      time = new Date();
      on = !on;
    }, 500);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="clock">
  <Digit current={Math.floor(time.getHours() / 10)} />
  <Digit current={time.getHours() % 10} />
  <Dots {on} />
  <Digit current={Math.floor(time.getMinutes() / 10)} />
  <Digit current={time.getMinutes() % 10} />
</div>

<style lang="scss">
  .clock {
    display: flex;
    justify-content: space-between;
  }
</style>
