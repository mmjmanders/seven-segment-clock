# svelte-seven-segment-clock

## Usage

Install `svelte-seven-segment-clock` using your favorite Node.js package manager

```sveltehtml
<script>
    import { Clock } from 'svelte-seven-segment-clock'
</script>

<div>
    <Clock />
</div>

<style>
    // To override the default colors, use CSS variables (defaults are shown here)
    :root {
        --ssc-body-bg: #FFF; // Same as background color is best to get transparent strokes
        --ssc-on: #F00;
        --ssc-off: rgba(255, 0, 0, .1);
    }
</style>
```
