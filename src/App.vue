<template>
    <div id="app">
        <div id="list-title-wrapper">
            <h3 @click="changeComponent">To Do List</h3>
            <h3 @click="changeComponent">Not To Do List</h3>
        </div>
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
        changeComponent() {
            this.currentComponent = this.currentComponent === 'to-do-list' ? 'not-to-do-list' : 'to-do-list';
        },
    },
}
</script>
