// Configuration: 93% of vertical screen height
const verticalRatio = 0.93;

const main = () => {
  const win = workspace.activeWindow;
  if (!win || win.fullScreen || win.noBorder || !win.resizeable) {
    return;
  }

  const screen = workspace.activeScreen;

  // Unmaximize if it was maximized
  if (win.maximizeMode !== 0 && workspace.slotWindowMaximize) {
    workspace.slotWindowMaximize(win);
  }

  // Read numbers directly (prevents the NaN / cloneObject crash)
  const screenWidth = screen.geometry.width;
  const screenHeight = screen.geometry.height;
  const screenX = screen.geometry.x;
  const screenY = screen.geometry.y;

  // 1. Keep the window's current width
  const targetWidth = win.frameGeometry.width;

  // 2. Set height to 90% of screen height
  const targetHeight = Math.round(screenHeight * verticalRatio);

  // 3. Center both horizontally and vertically
  const targetX = Math.round(screenX + (screenWidth / 2) - (targetWidth / 2));
  const targetY = Math.round(screenY + (screenHeight / 2) - (targetHeight / 2));

  try {
    win.frameGeometry = {
      x: targetX,
      y: targetY,
      width: targetWidth,
      height: targetHeight
    };
  } catch (err) {
    print("Error resizing: " + err);
  }
};

registerShortcut("ResizeAndCenterActiveWindow", "Resize And Center Active Window", null, main);
