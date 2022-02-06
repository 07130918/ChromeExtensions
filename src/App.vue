<template>
    <div id="app">
        <!-- keep-aliveしたい -->
        <to-do-list></to-do-list>
        <not-to-do-list></not-to-do-list>
    </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import NotToDoList from './components/NotToDoList.vue'

export default {
    name: 'App',
    components: {
        'to-do-list': ToDoList,
        'not-to-do-list': NotToDoList,
    },
}
</script>

<style scoped>
input {
    display: inline-block;
}
</style>
