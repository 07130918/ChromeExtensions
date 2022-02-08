参考: https://original-game.com/how-to-make-chrome-extensions/

#### ローカルで変更が終わったら、extensiton_build.py実行(npm buildと拡張機能用の設定を行ってくれる)
#### それを拡張機能側(chrome://extensions)で更新


```
{
    "name": "To Do List",
    "description": "A simple To Do List extension",
    "manifest_version": 3,
    "version": "1.0",
    "permissions": ["activeTab", "scripting", "storage"],
    "action": {
        "default_icon": "icon.png",
        "default_popup": "index.html"
    }
}

```
