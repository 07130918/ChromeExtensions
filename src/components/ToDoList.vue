<template>
    <div class="not-to-do-list">
        <!-- :keyは仮置 -->
        <div v-for="list in toDoList" :key="list.content.value">
            <input type="checkbox" :checked="list.isInputable" @change="changeIsInputable(list, $event)">
            <input type="text" :value="list.content" @input="saveContent(list, $event)" autocomplete="off" :disabled="list.isInputable">
        </div>
        <button class="btn btn-danger" @click="toDoList=createList(listLength)">Reset</button>
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
        this.toDoList = this.createList(this.listLength);
        for (let i = 0; i < this.listLength; i++) {
            chrome.storage.local.get(['inputCondition', 'content'], function(item) {
                this.toDoList[i] = {
                    isInputable: item.inputCondition,
                    content: item.content,
                };
            });
        }
    },
    methods: {
        changeIsInputable(list, event) {
            list.isInputable = event.target.checked;
            chrome.storage.local.set({inputCondition: list.isInputable}, function(){
                console.log("isInputable condition saved");
            });
        },
        saveContent(list, event) {
            list.content = event.target.value;
            chrome.storage.local.set({content: list.content,}, function(){
                console.log("content saved");
            });
        },
    },
}
</script>
