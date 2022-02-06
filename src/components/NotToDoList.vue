<template>
    <div class="not-to-do-list">
        <!-- :keyは仮置 -->
        <div v-for="list in notToDoList" :key="list.content.value">
            <input type="checkbox" v-model="list.isInputable">
            <input type="text" v-model="list.content" autocomplete="off" :disabled="list.isInputable">
        </div>
        <button class="btn btn-danger" @click="notToDoList=createList(listLength)">Reset</button>
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
        this.notToDoList = this.createList(this.listLength);
    },
}
</script>
