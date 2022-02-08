<template>
    <div class="to-do-list">
        <!-- :keyは仮置 -->
        <!-- <div v-for="(list, index) in toDoList" :key="list.content.value">
            <input type="checkbox" :checked="list.isInputable" @change="changeIsInputable(list, index, $event)">
            <input type="text" :value="list.content" @input="saveContent(list,index, $event)" autocomplete="off" :disabled="list.isInputable">
        </div>
        <button class="btn btn-danger" @click="toDoList=createList(listLength)">Reset</button> -->
        <input type="checkbox" :checked="toDoObject.isInputable" @change="changeIsInputable">
        <input type="text" :value="toDoObject.content" @input="saveContent" autocomplete="off" :disabled="toDoObject.isInputable">
        {{ toDoObject.content }}
        {{ toDoObject.isInputable }}
    </div>
</template>

<script>
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    data() {
        return {
            // toDoList: [],
            toDoObject: {
                content: "",
                isInputable: false,
            },
            listLength: 6,
        }
    },
    created() {
        // this.toDoList = this.createList(this.listLength);
        // for (let i = 0; i < this.listLength; i++) {
        //     chrome.storage.local.get(['inputCondition', 'content'], function(item) {
        //         this.toDoList[i] = {
        //             isInputable: item.inputCondition,
        //             content: item.content,
        //         };
        //     });
        // }
        chrome.storage.local.get(['inputCondition', 'content'], function(item) {
            alert(item.content);
            this.toDoObject.isInputable = item.inputCondition;
            this.toDoObject.content = item.content;
        }.bind(this));
    },
    methods: {
        // changeIsInputable(list, index, event) {
        //     list.isInputable = event.target.checked;
        //     chrome.storage.local.set({toDoList[index][inputCondition]: list.isInputable}, function(){
        //         console.log("isInputable condition saved");
        //     });
        // },
        // saveContent(list, event) {
        //     list.content = event.target.value;
        //     chrome.storage.local.set({content: list.content,}, function(){
        //         console.log("content saved");
        //     });
        // },
        changeIsInputable(event) {
            this.toDoObject.isInputable = event.target.checked;
            chrome.storage.local.set({inputCondition: this.toDoObject.isInputable}, function(){
                console.log("isInputable condition saved");
            });
        },
        saveContent(event) {
            this.toDoObject.content = event.target.value;
            chrome.storage.local.set({content: this.toDoObject.content,}, function(){
                console.log("content saved");
            });
        },
    },
}
</script>
