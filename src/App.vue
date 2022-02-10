<template>
    <div id="app">
        <div class="app-content" :class="{'dark-mode': darkMode}">
            <div id="list-title-wrapper">
                <h5 :class="{'active-component': isToDo}" @click="componentChangeTo('to-do-list')">To Do List</h5>
                <h5 :class="{'active-component': isNotToDo}" @click="componentChangeTo('not-to-do-list')">Not To Do List</h5>
                <h5 :class="{'active-component': isPreferences}" @click="componentChangeTo('preferences-setting');">
                    <font-awesome-icon icon="fa-solid fa-gear"/>
                </h5>
            </div>
            <!-- keep-aliveはなくても動くが切り替えの描画に影響する -->
            <keep-alive>
                <component :is="currentComponent" :darkMode=darkMode @click="toggleScreenMode"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import NotToDoList from './components/NotToDoList.vue'
import Preferences from './components/Preferences.vue'

export default {
    name: 'App',
    data() {
        return {
            darkMode: false,
            isToDo: true,
            isNotToDo: false,
            isPreferences: false,
            currentComponent: 'to-do-list',
        }
    },
    components: {
        'to-do-list': ToDoList,
        'not-to-do-list': NotToDoList,
        'preferences-setting': Preferences,
    },
    created() {
        chrome.storage.local.get('darkMode', function(item) {
            if (typeOf(item.darkMode) === 'undefined') {
                this.darkMode = false;
                return;
            }
            this.darkMode = item.darkMode ? true : false;
        }.bind(this));
    },
    methods: {
        componentChangeTo(componentName) {
            this.currentComponent = componentName;
            if (this.currentComponent === 'to-do-list') {
                this.isToDo = true;
                this.isNotToDo = false;
                this.isPreferences = false;
            } else if (this.currentComponent === 'not-to-do-list') {
                this.isToDo = false;
                this.isNotToDo = true;
                this.isPreferences = false;
            } else {
                this.isToDo = false;
                this.isNotToDo = false;
                this.isPreferences = true;
            }
        },
        toggleScreenMode(value) {
            this.darkMode = value;
            this.setToChromeStorage('darkMode', this.darkMode);
        },
    },
}
</script>
