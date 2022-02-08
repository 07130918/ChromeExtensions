# make manifest.json
# type python make_manifest.py

import os
import json


def main():
    content = {
        "name": "To Do List",
        "description": "A simple To Do List extension",
        "manifest_version": 3,
        "version": "1.0",
        "permissions": ["activeTab", "scripting", "storage"],
        "action": {
            "default_icon": "logo.png",
            "default_popup": "index.html"
        }
    }

    os.system('touch dist/manifest.json')
    with open('dist/manifest.json', 'w') as f:
        json.dump(content, f, ensure_ascii=False)


if __name__ == '__main__':
    main()
