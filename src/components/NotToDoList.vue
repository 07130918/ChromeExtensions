<template>
    <div class="not-to-do-list">
        <h1>Not To Do List</h1>
        <!-- :keyは仮置 -->
        <div v-for="list in notToDoList" :key="list.content.value">
            <input type="checkbox" v-model="list.isInputable">
            <input type="text" v-model="list.content" autocomplete="off" :disabled="list.isInputable">
        </div>
        <input type="button" value="Reset" @click="notToDoList=createList(listLength)">
    </div>
</template>

<script>
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    data() {
        return {
            notToDoList: [],
            listLength: 3,
        }
    },
    created() {
        this.notToDoList = this.createList(this.listLength);
    },
}
</script>
