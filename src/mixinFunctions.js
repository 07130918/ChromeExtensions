export default {
    methods: {
        createList(targetListLength) {
            const targetList = [];
            for (let i = 0; i < targetListLength; i++) {
                targetList.push({ isInputable: false, content: '' });
            }
            return targetList;
        },
    },
}
