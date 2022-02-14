# make manifest.json and set icon to dist/icons
import os
import json
import shutil


def main():
    os.system('npm run build')
    write_manifest()
    set_icons()


def write_manifest():
    content = {
        "name": "To Do List",
        "description": "A simple to-do list extension, You can also write your own not-to-do list",
        "manifest_version": 3,
        "version": "1.0.1",
        "permissions": ["activeTab", "scripting", "storage"],
        "icons": {
            "16": "icons/icon16.png",
            "48": "icons/icon48.png",
            "128": "icons/icon128.png",
        },
        "action": {
            "default_icon": "icons/icon128.png",
            "default_popup": "index.html"
        }
    }

    os.system('touch ./dist/manifest.json')
    with open('./dist/manifest.json', 'w') as f:
        json.dump(content, f, ensure_ascii=False, indent=4, separators=(',', ': '))


def set_icons():
    os.system('mkdir dist/icons')
    for icon in ['icon16.png', 'icon48.png', 'icon128.png']:
        shutil.copy(f'./src/assets/icons/{icon}', './dist/icons/')


if __name__ == '__main__':
    main()
