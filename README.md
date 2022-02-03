参考: https://original-game.com/how-to-make-chrome-extensions/

Vueで作り終わったら、npm run build でビルドしそれを拡張機能側(chrome://extensions/)で更新

### ※その際にmanifest.jsonとiconを設置知ることを忘れない

```
{
	"name": "To Do List",
    "description": "A simple to-do list app",
	"manifest_version": 3,
	"version": "1.0",
	"permissions": ["activeTab","scripting"],
    "action": {
        "default_icon": "img/icon.png",
        "default_popup": "index.html"
    }
}
```
