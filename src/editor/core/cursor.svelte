<script lang="ts">
  export let show: boolean
</script>

{#if show}
    <div class="cursor"/>
{/if}

<style lang="less">
    .cursor {
        opacity: 0;
        background: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10000;
    }
</style>