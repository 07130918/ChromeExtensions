<template>
    <div>
        <div class="not-to-do-list">
            <draggable v-model="notToDoList" :options="{animation:200}">
                <!-- :keyは仮置 -->
                <div class="list-children" v-for="list in notToDoList" :key="list.content.value">
                    <div class="text-content-wrapper not">
                        <input type="text" class="text-content" :value="list.content" @change="updateContent(list, $event)" autocomplete="off">
                    </div>
                </div>
            </draggable>
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-outline-danger btn-sm" @click="notToDoList=createList('notToDoList', notToDoListLength)">Reset</button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    props: {
        notToDoListLength: {
            type: Number,
            required: true,
        },
    },
    components: {
        draggable,
    },
    data() {
        return {
            notToDoList: [],
        }
    },
    created() {
        this.getFromChromeStorage();
    },
    activated() {
        this.getFromChromeStorage();
    },
    methods: {
        getFromChromeStorage() {
            chrome.storage.local.get('notToDoList', function (item) {
                this.notToDoList = item.notToDoList ? item.notToDoList : this.createList('notToDoList', this.notToDoListLength);
                console.log(item);
            }.bind(this));
        },
        updateContent(list, event) {
            list.content = event.target.value;
            this.setToChromeStorage('notToDoList', this.notToDoList);
        },
    },
}
</script>
