export default {
    methods: {
        createList(targetListLength) {
            const generatedList = [];
            for (let i = 0; i < targetListLength; i++) {
                generatedList.push({ isInputable: false, content: '' });
            }
            return generatedList;
        },
    },
}
