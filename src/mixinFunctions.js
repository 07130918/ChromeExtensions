export default {
    methods: {
        createList(objName, listLength) {
            const generatedList = [];
            for (let i = 0; i < listLength; i++) {
                generatedList.push({ isInputable: false, content: '' });
            }
            this.setToChromeStorage(objName, generatedList);
            return generatedList;
        },
        setToChromeStorage(objName, object) {
            chrome.storage.local.set({ [objName]: object }, function () {
                console.log(`${objName} saved`);
            });
        },
    },
}
