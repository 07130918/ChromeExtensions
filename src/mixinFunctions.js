export default {
    methods: {
        getFromChromeStorage(objName, listLength = null) {
            chrome.storage.local.get(objName, item => {
                if (listLength === null) {
                    // dark mode
                    this[objName] = item[objName] ? true : false;
                } else {
                    this[objName] = item[objName] ? item[objName] : this.createList(objName, listLength);
                }
            });
        },
        createList(objName, listLength) {
            const generatedList = [];
            const uniqueIds = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta'];
            for (let i = 0; i < listLength; i++) {
                generatedList.push({ id: uniqueIds[i], isInputable: false, content: '' });
            }
            this.setToChromeStorage(objName, generatedList);
            this[objName] = generatedList;
            // インストール時にgetFromChromeStorageの三項演算子を機能させるためreturn
            return this[objName];
        },
        setToChromeStorage(objName, object) {
            chrome.storage.local.set({ [objName]: object }, function() {
                console.log(`${objName} saved`);
            });
        },
    },
}
