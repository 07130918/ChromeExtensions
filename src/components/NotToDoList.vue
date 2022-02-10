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
        <button class="btn btn-outline-danger btn-sm reset" @click="notToDoList=createList(listLength, 'notToDoList')">Reset</button>
    </div>
</template>

<script>
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    data() {
        return {
            notToDoList: [],
            listLength: 3,
        }
    },
    created() {
        chrome.storage.local.get('notToDoList', function(item) {
            this.notToDoList = item.notToDoList ? item.notToDoList : this.createList(this.listLength, 'notToDoList');
        }.bind(this));
    },
    methods: {
        updateContent(list, event) {
            list.content = event.target.value;
            this.setToChromeStorage('notToDoList', this.notToDoList);
        },
    },
}
</script>
