<template>
    <div class="not-to-do-list">
        <!-- :keyは仮置 -->
        <div v-for="list in toDoList" :key="list.content.value">
            <input type="checkbox" v-model="list.isInputable">
            <input type="text" v-model="list.content" autocomplete="off" :disabled="list.isInputable">
        </div>
        <button class="btn btn-danger" @click="toDoList=createList(listLength)">Reset</button>
    </div>
</template>

<script>
import mixinFunctions from "../mixinFunctions";

export default {
    mixins: [mixinFunctions],
    data() {
        return {
            toDoList: [],
            listLength: 6,
        }
    },
    created() {
        this.toDoList = this.createList(this.listLength);
    },
}
</script>
