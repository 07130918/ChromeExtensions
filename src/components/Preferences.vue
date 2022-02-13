<template>
    <div>
        <div class="custom-control custom-switch btn-dark-mode">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" @change="toggleDarkMode" :checked="darkMode">
            <label class="custom-control-label" for="customSwitch1">
                Dark Mode
            </label>
        </div>
        <button class="btn btn-outline-danger btn-sm reset-all" @click="resetBothLists">Reset All</button>
        <footer>
            <a class="site-link" href="https://word-pop-quiz.netlify.app/" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon icon="fa-solid fa-link" />
                単語クイズに挑戦
            </a>
            <div class="exception-clause">
                ※ リストは随時自動保存されます。
                <br>
                ※ データ保存は必ずしも保証されません。
            </div>
        </footer>
    </div>
</template>

<script>
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    props: {
        darkMode: {
            type: Boolean,
            required: true,
        },
        toDoListLength: {
            type: Number,
            required: true,
        },
        notToDoListLength: {
            type: Number,
            required: true,
        },
    },
    methods:{
        toggleDarkMode() {
            this.$emit("click", !this.darkMode);
        },
        resetBothLists() {
            this.createList('toDoList', this.toDoListLength);
            this.createList('notToDoList', this.notToDoListLength);
        },
    },
}
</script>
