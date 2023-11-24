<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Digit from '$lib/components/digit/Digit.svelte';

  let time = new Date();
  let interval: number;

  onMount(() => {
    interval = window.setInterval(() => {
      time = new Date();
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="clock">
  <Digit current={Math.floor(time.getHours() / 10)} />
  <Digit current={time.getHours() % 10} />
  <Digit current={Math.floor(time.getMinutes() / 10)} />
  <Digit current={time.getMinutes() % 10} />
</div>

<style>
  .clock {
    display: flex;
  }
</style>
