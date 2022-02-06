<template>
    <div id="app">
        <!-- keep-aliveしたい -->
        <to-do-list></to-do-list>
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
import ToDoList from './components/ToDoList.vue'

export default {
    name: 'App',
    components: {
        'to-do-list': ToDoList,
    },
    data() {
        return {
            notToDoList: [],
            isInputablesOfNotToDo: [false, false, false],
        }
    },
    methods: {
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
