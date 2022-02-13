参考: https://original-game.com/how-to-make-chrome-extensions/

## 手順
#### ローカルで変更が終わったら、extensiton_build.py実行(npm buildと拡張機能用の設定を行ってくれる)
#### それを拡張機能側(chrome://extensions)で更新
******

manifest.json
```
{
    "name": "To Do List",
    "description": "A simple to-do list extension, You can also write your own not-to-do list",
    "manifest_version": 3,
    "version": "1.0",
    "permissions": [
        "activeTab",
        "scripting",
        "storage"
    ],
    "icons": {
        "16": "icons/icon16.png",
        "48": "icons/icon48.png",
        "128": "icons/icon128.png"
    },
    "action": {
        "default_icon": "icons/icon.png",
        "default_popup": "index.html"
    }
}

```
