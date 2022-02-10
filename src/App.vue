<template>
    <div id="app">
        <div id="list-title-wrapper">
            <h5 :class="{'active-component': isToDo}" @click="changeComponent('to-do-list')">To Do List</h5>
            <h5 :class="{'active-component': isNotToDo}" @click="changeComponent('not-to-do-list')">Not To Do List</h5>
        </div>
        <!-- keep-aliveはなくても動くが切り替えの描画に影響する -->
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
            isToDo: true,
            isNotToDo: false,
        }
    },
    components: {
        'to-do-list': ToDoList,
        'not-to-do-list': NotToDoList,
    },
    methods: {
        changeComponent(componentName) {
            this.currentComponent = componentName;
            if (this.currentComponent === 'to-do-list') {
                this.isToDo = true;
                this.isNotToDo = false;
            } else {
                this.isToDo = false;
                this.isNotToDo = true;
            }
        },
    },
}
</script>
