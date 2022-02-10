<template>
    <div>
        <div class="not-to-do-list">
            <!-- :keyは仮置 -->
            <div class="list-children" v-for="list in notToDoList" :key="list.content.value">
                <div class="text-content-wrapper not">
                    <input type="text" class="text-content" :value="list.content" @change="updateContent(list, $event)" autocomplete="off">
                </div>
            </div>
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-outline-danger btn-sm" @click="notToDoList=createList(notToDoListLength, 'notToDoList')">Reset</button>
        </div>
    </div>
</template>

<script>
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    props: {
        notToDoListLength: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            notToDoList: [],
        }
    },
    created() {
        this.getNotToDoListFromChromeStorage();
    },
    activated() {
        this.getNotToDoListFromChromeStorage();
        },
    methods: {
        getNotToDoListFromChromeStorage() {
            chrome.storage.local.get('notToDoList', function(item) {
                this.notToDoList = item.notToDoList ? item.notToDoList : this.createList(this.notToDoListLength, 'notToDoList');
            }.bind(this));
        },
        updateContent(list, event) {
            list.content = event.target.value;
            this.setToChromeStorage('notToDoList', this.notToDoList);
        },
    },
}
</script>
