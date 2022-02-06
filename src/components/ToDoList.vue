<template>
    <div class="to-do-list">
        <h1>To Do List</h1>
        <div v-for="list in toDoList" :key="list.content">
            <input type="checkbox" v-model="list.isInputable">
            <input type="text" v-model="list.content" autocomplete="off" :disabled="list.isInputable">
        </div>
        <input type="button" value="Reset" @click="createList">
    </div>
</template>

<script>
export default {
    data() {
        return {
            toDoList: [],
            toDoListObj: {
                isInputable: false,
                content: '',
            },
            listLength: 6,
        }
    },
    created() {
        this.createList();
    },
    methods: {
        createList() {
            if (this.toDoList.length != 0) this.toDoList = [];

            for (let index = 0; index < this.listLength; index++) {
                this.toDoList.push({...this.toDoListObj});
            }
        },
    }
}
</script>
