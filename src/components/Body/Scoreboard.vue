<template>
    <div>
        <div class="scoreboard text-center">
            <div class="row scoreboard-best">
                Hi
            </div>
            <hr>
            <div class="row scoreboard-table">
                HI again
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'scoreboard',
}
</script>

<style>

    @media (min-width: 992px) {
        .scoreboard {
            background: red;
        }
    }
    @media (min-width: 768px) {
        .scoreboard {
            background: blue;
        }
    }
</style>
