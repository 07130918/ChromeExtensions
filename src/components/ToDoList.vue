<template>
    <div class="to-do-list">
        <h1>To Do List</h1>
        <div v-for="list in toDoList" :key="list">
            <input type="checkbox" v-model="list.isInputable">
            <input type="text" v-model="toDoList.content" autocomplete="off" :disabled="list.isInputable">
        </div>
        <input type="button" value="list clear" @click="clearToDoValues">
    </div>
</template>

<script>
export default {
    data() {
        return {
            toDoListObj: {
                isInputable: false,
                content: null,
            },
            toDoList: [],
        }
    },
    created() {
        for (let index = 0; index < 6; index++) {
            this.toDoList.push(this.toDoListObj);
        }
    },
    methods: {
        clearToDoValues() {
            this.toDoList = [];
        },
    }
}
</script>
