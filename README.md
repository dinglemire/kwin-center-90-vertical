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
```

### 2. Enable the script
1. Open **System Settings** → **Window Management** → **KWin Scripts**.
2. Check the box for **Resize And Center Active Window**.
3. Click **Apply**.

### 3. Assign a Shortcut
1. Open **System Settings** → **Shortcuts** (under *Keyboard*).
2. In the search box, search for: **`Resize And Center Active Window`**.
3. Click on it, assign your preferred shortcut (e.g. `Meta + C` or `Alt + C`).
4. Click **Apply**.

---

## ⚙️ Customization

If you want to change the height percentage (e.g. from 90% to 85% or 95%):

1. Open `contents/code/main.js`:
```bash
nano ~/.local/share/kwin/scripts/kwin-center-90-vertical/contents/code/main.js
```

2. Edit the ratio at the top of the file:
```javascript
// Change 0.90 to whatever you prefer (e.g. 0.85 = 85%)
const verticalRatio = 0.90;
```

3. Save the file and reload KWin by unchecking and re-checking the script in **System Settings → KWin Scripts** (then click Apply).

---

## 🔍 Debugging

If you run into issues on specific windows, monitor KWin's log in a terminal while triggering the shortcut:

```bash
journalctl -f QT_CATEGORY=js QT_CATEGORY=kwin_scripting
```

---

## 📜 Credits

Based on the original script by [riks1233](https://github.com/riks1233/kwin_resize_and_center_window).
```

---

