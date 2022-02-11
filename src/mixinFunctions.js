export default {
    methods: {
        getFromChromeStorage(objName, objLength) {
            chrome.storage.local.get(objName, function (item) {
                return item.objName ? item.objName : this.createList(objLength, objName);
            }.bind(this));
        },
        createList(listLength, objName) {
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
