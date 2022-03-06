Reference: https://original-game.com/how-to-make-chrome-extensions

## Procedure
#### When you are done making changes local environment, run extensiton_build.py 
(it will do the npm build and configuration for the extension)
#### Update it on the extension side (chrome://extensions)
******

manifest.json
```
{
    "name": "To Do List",
    "description": "A simple to-do list extension, You can also write your own not-to-do list",
    "manifest_version": 3,
    "version": "1.1.0",
    "permissions": [
        "activeTab",
        "storage"
    ],
    "icons": {
        "16": "icons/icon16.png",
        "48": "icons/icon48.png",
        "128": "icons/icon128.png"
    },
    "action": {
        "default_icon": "icons/icon128.png",
        "default_popup": "index.html"
    }
}
```
******
参考: https://original-game.com/how-to-make-chrome-extensions

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
    "version": "1.1.0",
    "permissions": [
        "activeTab",
        "storage"
    ],
    "icons": {
        "16": "icons/icon16.png",
        "48": "icons/icon48.png",
        "128": "icons/icon128.png"
    },
    "action": {
        "default_icon": "icons/icon128.png",
        "default_popup": "index.html"
    }
}
```
