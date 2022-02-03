<template>
    <div id="app">
        <!-- keep-aliveしたい -->
        <div class="to-do-list">
            <h1>To Do List</h1>
            <div v-for="(key, i) in isInputablesOfToDo.length" :key="key">
                <input type="checkbox" v-model="isInputablesOfToDo[i]">
                <input type="text" v-model="toDoList[i]" autocomplete="off" :disabled="isInputablesOfToDo[i]">
            </div>
            <input type="button" value="clear" @click="clearToDoValues">
        </div>
        <div class="not-to-do-list">
            <h1>Not To Do List</h1>
            <div v-for="(key, t) in isInputablesOfNotToDo.length" :key="key">
                <input type="checkbox" v-model="isInputablesOfNotToDo[t]">
                <input type="text" v-model="notToDoList[t]" autocomplete="off" :disabled="isInputablesOfNotToDo[t]">
            </div>
            <input type="button" value="clear" @click="clearNotToDoValues">
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            toDoList: [],
            notToDoList: [],
            isInputablesOfToDo: [false, false, false, false, false, false],
            isInputablesOfNotToDo: [false, false, false],
        }
    },
    methods: {
        clearToDoValues() {
            this.toDoList = [];
            this.isInputablesOfToDo = [false, false, false, false, false, false];
        },
        clearNotToDoValues() {
            this.notToDoList = [];
            this.isInputablesOfNotToDo = [false, false, false];
        },
    }
}
</script>

<style scoped>
input {
    display: inline-block;
}
</style>
