"use client";

import { init, miniApp } from "@telegram-apps/sdk";

let initialized = false;

export function initTelegram() {
  if (initialized) return;

  initialized = true;

  try {
    init();

    if (miniApp.mount.isAvailable()) {
      miniApp.mount();
    }

    if (miniApp.ready.isAvailable()) {
      miniApp.ready();
    }

    if (miniApp.expand.isAvailable()) {
      miniApp.expand();
    }
  } catch (e) {
    console.error(e);
  }
}

export function getTelegramUser() {
  try {
    return miniApp.initDataUnsafe.user;
  } catch {
    return null;
  }
}
