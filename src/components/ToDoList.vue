<template>
    <div>
        <div class="to-do-list">
            <draggable v-model="toDoList" :options="{animation:200}">
                <!-- :keyは仮置 -->
                <div class="list-children" v-for="list in toDoList" :key="list.content.value">
                    <input type="checkbox" class="checkbox" :checked="list.isInputable" @change="updateIsInputable(list, $event)">
                    <div class="text-content-wrapper">
                        <input type="text" class="text-content" :value="list.content" @change="updateContent(list, $event)" autocomplete="off" :disabled="list.isInputable">
                    </div>
                </div>
            </draggable>
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-outline-danger btn-sm" @click="allInputablesWillBeFalse">uncheck</button>
            <button class="btn btn-outline-danger btn-sm" @click="toDoList=createList(toDoListLength, 'toDoList')">Reset</button>
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
    created() {
        this.toDoList = this.getFromChromeStorage('toDoList', this.toDoListLength);
    },
    activated() {
        this.toDoList = this.getFromChromeStorage('toDoList', this.toDoListLength);
    },
    methods: {
        updateIsInputable(list, event) {
            list.isInputable = event.target.checked;
            this.setToChromeStorage('toDoList', this.toDoList);
        },
        updateContent(list, event) {
            list.content = event.target.value;
            this.setToChromeStorage('toDoList', this.toDoList);
        },
        allInputablesWillBeFalse() {
            this.toDoList.forEach(list => {
                list.isInputable = false;
            });
            this.setToChromeStorage('toDoList', this.toDoList);
        },
    },
}
</script>
