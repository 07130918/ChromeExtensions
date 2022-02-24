<template>
    <div>
        <div class="to-do-list">
            <draggable v-model="toDoList" :options="{animation: 200}">
                <div class="list-children" v-for="list in toDoList" :key="list.id">
                    <input type="checkbox" class="checkbox" :checked="list.isChecked" @change="toggleCheckboxCondition(list, $event)">
                    <div class="text-content-wrapper">
                        <input type="text" class="text-content" :value="list.content" @change="updateContent(list, $event)" autocomplete="off" :disabled="list.isChecked">
                    </div>
                </div>
            </draggable>
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-outline-danger btn-sm" @click="allCheckboxesWillBeFalse">Uncheck</button>
            <button class="btn btn-outline-danger btn-sm" @click="createList('toDoList', toDoListLength)">Reset</button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    props: {
        toDoListLength: {
            type: Number,
            required: true,
        },
    },
    components: {
        draggable,
    },
    data() {
        return {
            toDoList: [],
        }
    },
    activated() {
        this.getFromChromeStorage('toDoList', this.toDoListLength);
    },
    updated() {
        this.$nextTick(function() {
            this.setToChromeStorage('toDoList', this.toDoList);
        });
    },
    methods: {
        toggleCheckboxCondition(list, event) {
            list.isChecked = event.target.checked;
            this.setToChromeStorage('toDoList', this.toDoList);
        },
        updateContent(list, event) {
            list.content = event.target.value;
            this.setToChromeStorage('toDoList', this.toDoList);
        },
        allCheckboxesWillBeFalse() {
            this.toDoList.forEach(list => {
                list.isChecked = false;
            });
            this.setToChromeStorage('toDoList', this.toDoList);
        },
    },
}
</script>
