<template>
    <div>
        <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" @change="turnOverScreen" :checked="darkMode">
            <label class="custom-control-label" for="customSwitch1">
                Dark Mode
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        darkMode: {
            type: Boolean,
            required: true,
        },
    },
    methods:{
        turnOverScreen() {
            this.$emit("click", !this.darkMode);
        },
    },
}
</script>
