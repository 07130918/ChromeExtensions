export default {
    methods: {
        createList(targetListLength, objectName) {
            const generatedList = [];
            for (let i = 0; i < targetListLength; i++) {
                generatedList.push({ isInputable: false, content: '' });
            }
            this.setToChromeStorage(objectName, generatedList);
            return generatedList;
        },
        setToChromeStorage(objectName, object) {
            chrome.storage.local.set({ [objectName]: object }, function () {
                console.log(`${objectName} saved`);
            });
        },
    },
}
