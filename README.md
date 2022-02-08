参考: https://original-game.com/how-to-make-chrome-extensions/

#### Vueで作り終わったら、npm run build でビルド
#### その後make_manifest.pyを実行しマニフェストの作成
#### それを拡張機能側(chrome://extensions/)で更新


```
{
    "name": "To Do List",
    "description": "A simple To Do List extension",
    "manifest_version": 3,
    "version": "1.0",
    "permissions": ["activeTab","scripting", "storage"],
    "action": {
        "default_icon": "icon.png",
        "default_popup": "index.html"
    }
}

```
