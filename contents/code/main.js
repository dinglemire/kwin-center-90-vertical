// Configuration: adjust percentages as needed (e.g., 0.80 = 80%, 0.93 = 93%)
const horizontalRatio = 0.80; // Change this to your preferred width (e.g. 0.70, 0.80, etc.)
const verticalRatio = 0.93;   // 93% of screen height

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

  // Read screen dimensions
  const screenWidth = screen.geometry.width;
  const screenHeight = screen.geometry.height;
  const screenX = screen.geometry.x;
  const screenY = screen.geometry.y;

  // 1. Set width based on the screen width ratio
  const targetWidth = Math.round(screenWidth * horizontalRatio);

  // 2. Set height based on the screen height ratio
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
