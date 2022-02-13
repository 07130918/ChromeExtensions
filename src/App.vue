<template>
    <div id="app">
        <div class="app-content" :class="{'dark-mode': darkMode}">
            <div id="component-title-wrapper">
                <h5 class="title border-b" :class="{'active-component': isToDo}"
                @click="componentChangeTo('to-do-list')">
                    To Do List
                </h5>
                <h5 class="title border-b" :class="{'active-component': isNotToDo}"
                @click="componentChangeTo('not-to-do-list')">
                    Not To Do List
                </h5>
                <h5 class="title" :class="{'active-component': isPreferences}"
                @click="componentChangeTo('preferences-setting');">
                    <font-awesome-icon icon="fa-solid fa-gear"/>
                </h5>
            </div>
            <!-- keep-aliveはなくても動くが切り替えの描画に影響する -->
            <keep-alive>
                <component
                :is="currentComponent"
                :darkMode="darkMode"
                :toDoListLength="toDoListLength"
                :notToDoListLength="notToDoListLength"
                @click="toggleScreenMode">
                </component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import mixinFunctions from "./mixinFunctions";

import ToDoList from './components/ToDoList.vue'
import NotToDoList from './components/NotToDoList.vue'
import Preferences from './components/Preferences.vue'

export default {
    mixins: [mixinFunctions],
    name: 'App',
    components: {
        'to-do-list': ToDoList,
        'not-to-do-list': NotToDoList,
        'preferences-setting': Preferences,
    },
    data() {
        return {
            darkMode: false,
            isToDo: true,
            isNotToDo: false,
            isPreferences: false,
            currentComponent: 'to-do-list',
            // Preferencesのリセットで使うため親で定義
            toDoListLength: 6,
            notToDoListLength: 3,
        }
    },
    created() {
        this.getFromChromeStorage('darkMode');
    },
    methods: {
        componentChangeTo(componentName) {
            this.currentComponent = componentName;
            if (this.currentComponent === 'to-do-list') {
                this.changeCssActiveComponent([true, false, false]);
            } else if (this.currentComponent === 'not-to-do-list') {
                this.changeCssActiveComponent([false, true, false]);
            } else {
                this.changeCssActiveComponent([false, false, true]);
            }
        },
        changeCssActiveComponent(renewList) {
            // 引数は必ず[this.isToDo, this.isNotToDo, this.isPreferences]の順番のBoolean渡す
            this.isToDo = renewList[0];
            this.isNotToDo = renewList[1];
            this.isPreferences = renewList[2];
        },
        toggleScreenMode(value) {
            this.darkMode = value;
            this.setToChromeStorage('darkMode', this.darkMode);
        },
    },
}
</script>
