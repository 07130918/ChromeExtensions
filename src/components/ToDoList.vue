<template>
    <div>
        <div class="to-do-list">
            <!-- :keyは仮置 -->
            <div class="list-children" v-for="list in toDoList" :key="list.content.value">
                <input type="checkbox" class="checkbox" :checked="list.isInputable" @change="updateIsInputable(list, $event)">
                <div class="text-content-wrapper">
                    <input type="text" class="text-content" :value="list.content" @change="updateContent(list, $event)" autocomplete="off" :disabled="list.isInputable">
                </div>
            </div>
        </div>
        <button class="btn btn-outline-danger btn-sm reset" @click="toDoList=createList(listLength, 'toDoList')">Reset</button>
    </div>
</template>

<script>
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    data() {
        return {
            toDoList: [],
            listLength: 6,
        }
    },
    created() {
        chrome.storage.local.get('toDoList', function(item) {
            this.toDoList = item.toDoList ? item.toDoList : this.createList(this.listLength, 'toDoList');
        }.bind(this));
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
    },
}
</script>
