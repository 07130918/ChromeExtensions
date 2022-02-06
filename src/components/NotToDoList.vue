<template>
    <div class="not-to-do-list">
        <h1>Not To Do List</h1>
        <div v-for="list in notToDoList" :key="list.content">
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
            notToDoList: [],
            notToDoListObj: {
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
            if (this.notToDoList.length != 0) this.notToDoList = [];

            for (let index = 0; index < this.listLength; index++) {
                this.notToDoList.push({...this.notToDoListObj});
            }
        },
    }
}
</script>
