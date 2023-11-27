<script lang="ts">
  export let on: boolean;

  $: fill = on ? 'on' : 'off';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="160"
  viewBox="0 0 48 150"
  stroke="var(--ssc-body-bg)"
  stroke-width=".25"
  class="dots"
>
  <circle cx="24" cy="50" r="7.5" class={fill} />
  <circle cx="24" cy="100" r="7.5" class={fill} />
</svg>
