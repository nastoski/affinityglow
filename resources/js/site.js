import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import "lazysizes";

window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.start();

// exposing bodyScrollLock functions to window so they can be used from components
import { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

window.enableBodyScroll = enableBodyScroll;
window.disableBodyScroll = disableBodyScroll;
window.clearAllBodyScrollLocks = clearAllBodyScrollLocks;