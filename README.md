# KWin Center & Resize Window (90% Vertical)

A lightweight KWin script for **KDE Plasma 6 (Wayland & X11)** that centers the active window on your screen and resizes its height to **90% of the display**, while keeping its original width intact.

---

## ✨ Features

* **90% Vertical Height:** Expands the window height to fill 90% of the monitor space.
* **Preserves Width:** Keeps your custom window width untouched (doesn't force an awkward aspect ratio).
* **Perfect Centering:** Automatically centers the window horizontally and vertically.
* **Auto-Unmaximize:** Gracefully handles maximized windows before resizing.
* **Plasma 6 Compatible:** Works reliably on modern Fedora / KDE Plasma installations.

---

## 🚀 Installation

### 1. Clone the repository
Open a terminal and clone the repository directly into your KWin scripts directory:

```bash
mkdir -p ~/.local/share/kwin/scripts
git clone https://github.com/dinglemire/kwin-center-90-vertical.git ~/.local/share/kwin/scripts/kwin-center-90-vertical

2. Enable the script

    Open System Settings → Window Management → KWin Scripts.

    Check the box for Resize And Center Active Window.

    Click Apply.

3. Assign a Shortcut

    Open System Settings → Shortcuts (under Keyboard).

    In the search box, search for: Resize And Center Active Window.

    Click on it, assign your preferred shortcut (e.g. Meta + C or Alt + C).

    Click Apply.

⚙️ Customization

If you want to change the height percentage (e.g. from 90% to 85% or 95%):

    Open contents/code/main.js:
    Bash

    nano ~/.local/share/kwin/scripts/kwin-center-90-vertical/contents/code/main.js

    Edit the ratio at the top of the file:
    JavaScript

    // Change 0.90 to whatever you prefer (e.g. 0.85 = 85%)
    const verticalRatio = 0.90;

    Save the file and reload KWin by unchecking and re-checking the script in System Settings → KWin Scripts (then click Apply).

🔍 Debugging

If you run into issues on specific windows, monitor KWin's log in a terminal while triggering the shortcut:
Bash

journalctl -f QT_CATEGORY=js QT_CATEGORY=kwin_scripting

📜 Credits

Based on the original script by riks1233.
Code

---

### How to update it on GitHub:

**Fastest way (directly on GitHub):**
1. On your GitHub repo page, click the **pencil icon ✏️** (top right of the README box).
2. Delete everything and paste the text above.
3. Click the green **Commit changes...** button at the top right.

**Terminal way (if you prefer local):**
Inside your Dolphin terminal drawer (`F4`), paste:
```bash
# Update the local file, commit, and push
git add README.md
git commit -m "Update README with installation and 90% vertical details"
git push
