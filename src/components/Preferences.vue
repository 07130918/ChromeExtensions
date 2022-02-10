<template>
    <div>
        <div class="custom-control custom-switch btn-dark-mode">
        <input type="checkbox" class="custom-control-input" id="customSwitch1" @change="turnOverScreen" :checked="darkMode">
            <label class="custom-control-label" for="customSwitch1">
                Dark Mode
            </label>
        </div>
        <button class="btn btn-outline-danger btn-sm reset-all" @click="resetBothLists">Reset All</button>
        <footer>
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
        turnOverScreen() {
            this.$emit("click", !this.darkMode);
        },
        resetBothLists() {
            this.createList(this.toDoListLength, 'toDoList');
            this.createList(this.notToDoListLength, 'notToDoList');
        },
    },
}
</script>
