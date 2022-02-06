<template>
    <div id="app">
        <h1 @click="changeComponent('to-do-list')">To Do List</h1>
        <h1 @click="changeComponent('not-to-do-list')">Not To Do List</h1>
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import NotToDoList from './components/NotToDoList.vue'

export default {
    name: 'App',
    data() {
        return {
            currentComponent: 'to-do-list',
        }
    },
    components: {
        'to-do-list': ToDoList,
        'not-to-do-list': NotToDoList,
    },
    methods: {
        changeComponent(componentName) {
            this.currentComponent = componentName;
        },
    },
}
</script>

<style scoped>
input {
    display: inline-block;
}
</style>
