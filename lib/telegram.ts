"use client";

import { init, viewport, miniApp } from "@telegram-apps/sdk";

let initialized = false;

export function initTelegram() {
  if (initialized) return;

  initialized = true;

  try {
    init();

    if (miniApp.mount.isAvailable()) {
      miniApp.mount();
    }

    if (viewport.mount.isAvailable()) {
      viewport.mount();
    }

    if (miniApp.ready.isAvailable()) {
      miniApp.ready();
    }

    if (miniApp.expand.isAvailable()) {
      miniApp.expand();
    }
  } catch (e) {
    console.log("Telegram SDK:", e);
  }
}
