export default {
    methods: {
        getFromChromeStorage(objName, listLength = null) {
            chrome.storage.local.get(objName, function(item) {
                if (listLength === null) {
                    // dark mode
                    this[objName] = item[objName] ? true : false;
                } else {
                    this[objName] = item[objName] ? item[objName] : this.createList(objName, listLength);
                }
            }.bind(this));
        },
        createList(objName, listLength) {
            const generatedList = [];
            for (let i = 0; i < listLength; i++) {
                generatedList.push({ isInputable: false, content: '' });
            }
            this.setToChromeStorage(objName, generatedList);
            this[objName] = generatedList;
        },
        setToChromeStorage(objName, object) {
            chrome.storage.local.set({ [objName]: object }, function() {
                console.log(`${objName} saved`);
            });
        },
    },
}
