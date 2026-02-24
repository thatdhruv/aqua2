//
// aqua2.js
//
// A is a self-contained UI framework for the web, inspired by Apple's Aqua design language.
//

(function initializeAqua() {
  const aqua = document.createElement('style');
  aqua.textContent = `
:root {
  --aqua-color:              #0071e3;
  --graphite-color:          #888888;
  --aqua-foreground:         #1d1d1f;
  --aqua-foreground-muted:   rgba(0, 0, 0, 0.38);
  --aqua-background:         rgba(0, 0, 0, 0.07);
  --aqua-border:             rgba(0, 0, 0, 0.12);
}

@media (prefers-color-scheme: dark) {
  :root {
    --aqua-color:            #1a84ff;
    --graphite-color:        #666666;
    --aqua-foreground:       #f5f5f7;
    --aqua-foreground-muted: rgba(255, 255, 255, 0.32);
    --aqua-background:       rgba(255, 255, 255, 0.10);
    --aqua-border:           rgba(255, 255, 255, 0.14);
  }
}

.aqua-button, .graphite-button, .aqua-button-circular, .graphite-button-circular, .aqua-button-square, .graphite-button-square, [class$="-focused"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.aqua-button, .graphite-button, [class$="-focused"]:not([class*="circular"]):not([class*="square"]) {
  padding: 7px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.aqua-button-circular, .graphite-button-circular, [class$="-focused"][class*="circular"] {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex-shrink: 0;
}

.aqua-button-square, .graphite-button-square, [class$="-focused"][class*="square"] {
  width: 30px;
  height: 30px;
  border-radius: 0px;
  flex-shrink: 0;
}

.aqua-button, .graphite-button, .aqua-button-circular, .graphite-button-circular, .aqua-button-square, .graphite-button-square {
  background: var(--aqua-background);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.08) 100%);
  color: var(--aqua-foreground);
  border: 1px solid var(--aqua-border);
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  transition: background 0.20s ease, background-image 0.20s ease, transform 0.14s ease;
}

.aqua-button:hover, .graphite-button:hover, .aqua-button-circular:hover, .graphite-button-circular:hover, .aqua-button-square:hover, .graphite-button-square:hover {
  background: color-mix(in srgb, var(--aqua-background) 80%, currentColor 20%);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.12) 100%);
}

.aqua-button:active, .aqua-button-circular:active, .aqua-button-square:active {
  transform: scale(0.96);
  background: var(--aqua-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.36) 0%, rgba(255,255,255,0.00) 52%, rgba(255,255,255,0.18) 100%);
  border-color: transparent;
  color: var(--aqua-foreground);
}

.graphite-button:active, .graphite-button-circular:active, .graphite-button-square:active {
  transform: scale(0.96);
  background: var(--graphite-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.00) 52%, rgba(255,255,255,0.14) 100%);
  border-color: transparent;
}

[class$="-focused"] {
  border: 1px solid transparent;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.14) 100%);
  transition: transform 0.12s ease;
}

[class$="-focused"]:active {
  transform: scale(0.96);
}

[class$="-focused"]:not([class*="graphite"]) {
  color: var(--aqua-foreground);
  animation: aqua-pulse 1.2s ease-in-out infinite;
}

[class$="-focused"][class*="graphite"] {
  color: var(--aqua-foreground);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.10) 100%);
  animation: graphite-pulse 1.2s ease-in-out infinite;
}

@keyframes aqua-pulse {
  0%, 100% {
    background-color: color-mix(in srgb, var(--aqua-color) 75%, white);  opacity: 0.92;
  } 50%  {
    background-color: color-mix(in srgb, var(--aqua-color) 75%, black);  opacity: 1;
  }
}

@keyframes graphite-pulse {
  0%, 100% {
    background-color: color-mix(in srgb, var(--graphite-color) 30%, transparent); opacity: 0.90;
  } 50% {
    background-color: color-mix(in srgb, var(--graphite-color) 70%, transparent); opacity: 1;
  }
}

[class*="aqua-button-circular"] svg, [class*="graphite-button-circular"] svg, [class*="aqua-button-square"] svg, [class*="graphite-button-square"] svg {
  width: 18px;
  height: 18px;
  overflow: visible;
  flex-shrink: 0;
}

.aqua-radio, .graphite-radio {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: default;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.aqua-radio input[type="radio"], .graphite-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.aqua-radio-control {
  position: relative;
  width: 20px;
  height: 20px;
  pointer-events: none;
  flex-shrink: 0;
}

.aqua-radio-control::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(ellipse 80% 55% at 50% 18%, rgba(255,255,255,0.45) 0%, transparent 70%), linear-gradient(to bottom, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.00) 58%, rgba(255,255,255,0.10) 100%), var(--aqua-background);
  border: 1.5px solid var(--aqua-border);
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.20s ease, border-color 0.20s ease;
}

.aqua-radio-control::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: transparent;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.22s cubic-bezier(0.34,1.5,0.64,1), opacity 0.18s ease;
}

.aqua-radio input[type="radio"]:checked + .aqua-radio-control::before {
  background: radial-gradient(ellipse 80% 55% at 50% 18%, rgba(255,255,255,0.40) 0%, transparent 68%), linear-gradient(to bottom, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.00) 50%, rgba(255,255,255,0.18) 100%), var(--aqua-color);
  border-color: var(--aqua-color);
}

.graphite-radio input[type="radio"]:checked + .aqua-radio-control::before {
  background: radial-gradient(ellipse 80% 55% at 50% 18%, rgba(255,255,255,0.32) 0%, transparent 68%), linear-gradient(to bottom, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.00) 50%, rgba(255,255,255,0.14) 100%), var(--graphite-color);
  border-color: var(--graphite-color);
}

.aqua-radio input[type="radio"]:checked + .aqua-radio-control::after, .graphite-radio input[type="radio"]:checked + .aqua-radio-control::after {
  background: var(--aqua-foreground);
  transform: scale(1);
  opacity: 1;
}

.aqua-radio-label {
  font-size: 14px;
  font-weight: 400;
  color: var(--aqua-foreground);
  line-height: 1;
}

.aqua-checkbox, .graphite-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  cursor: default;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.aqua-checkbox input[type="checkbox"], .graphite-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.aqua-checkbox-control {
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  background: radial-gradient(ellipse 90% 60% at 50% 18%, rgba(255,255,255,0.40) 0%, transparent 68%), linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.10) 100%), var(--aqua-background);
  border: 1.5px solid var(--aqua-border);
  box-shadow: 0 1px 4px rgba(0,0,0,0.14);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.18s ease, border-color 0.18s ease, transform 0.22s cubic-bezier(0.34,1.55,0.64,1);
  overflow: visible;
}

.aqua-checkbox-left, .aqua-checkbox-right {
  position: absolute;
  background: transparent;
  border-radius: 2px;
  transform-origin: left center;
  transition: none;
}

.aqua-checkbox-left  {
  width: 10px;
  height: 2.5px;
  bottom: 4px;
  left: 10px;
  transform: rotate(-135deg) scaleX(0);
}

.aqua-checkbox-right {
  width: 20px;
  height: 2.5px;
  bottom: 4px;
  left: 8.5px;
  transform: rotate(-45deg) scaleX(0);
}

.aqua-checkbox input[type="checkbox"]:checked + .aqua-checkbox-control {
  background: radial-gradient(ellipse 90% 60% at 50% 18%, rgba(255,255,255,0.36) 0%, transparent 66%), linear-gradient(to bottom, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.00) 52%, rgba(255,255,255,0.16) 100%), var(--aqua-color);
  border-color: var(--aqua-color);
  animation: checkbox-settle 0.35s cubic-bezier(0.34,1.55,0.64,1) forwards;
}

.graphite-checkbox input[type="checkbox"]:checked + .aqua-checkbox-control {
  background: radial-gradient(ellipse 90% 60% at 50% 18%, rgba(255,255,255,0.28) 0%, transparent 66%), linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 52%, rgba(255,255,255,0.14) 100%), var(--graphite-color);
  border-color: var(--graphite-color);
  animation: checkbox-settle 0.35s cubic-bezier(0.34,1.55,0.64,1) forwards;
}

.aqua-checkbox input[type="checkbox"]:checked + .aqua-checkbox-control .aqua-checkbox-left, .graphite-checkbox input[type="checkbox"]:checked + .aqua-checkbox-control .aqua-checkbox-left {
  background: var(--aqua-foreground);
  transform: rotate(-135deg) scaleX(1);
  transition: transform 0.14s ease 0s;
}

.aqua-checkbox input[type="checkbox"]:checked + .aqua-checkbox-control .aqua-checkbox-right, .graphite-checkbox input[type="checkbox"]:checked + .aqua-checkbox-control .aqua-checkbox-right {
  background: var(--aqua-foreground);
  transform: rotate(-45deg) scaleX(1);
  transition: transform 0.18s ease 0.08s;
}

.aqua-checkbox input[type="checkbox"]:not(:checked) + .aqua-checkbox-control .aqua-checkbox-left, .graphite-checkbox input[type="checkbox"]:not(:checked) + .aqua-checkbox-control .aqua-checkbox-left {
  transform: rotate(-135deg) scaleX(0);
  transition: transform 0.10s ease;
}

.aqua-checkbox input[type="checkbox"]:not(:checked) + .aqua-checkbox-control .aqua-checkbox-right, .graphite-checkbox input[type="checkbox"]:not(:checked) + .aqua-checkbox-control .aqua-checkbox-right {
  transform: rotate(-45deg) scaleX(0);
  transition: transform 0.10s ease;
}

@keyframes checkbox-settle {
  0% {
    transform: scale(1);
  } 40% {
    transform: scale(1.18);
  } 100% {
    transform: scale(1);
  }
}

.aqua-checkbox-label {
  font-size: 14px;
  font-weight: 400;
  color: var(--aqua-foreground);
  line-height: 1;
}

.aqua-input-wrap {
  display: inline-block;
  position: relative;
  border-radius: 999px;
}

.aqua-input, .graphite-input {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 400;
  color: var(--aqua-foreground);
  background: var(--aqua-background);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.08) 100%);
  border: 1.5px solid var(--aqua-border);
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  -webkit-appearance: none;
}

.aqua-input::placeholder, .graphite-input::placeholder {
  color: var(--aqua-foreground-muted);
}

.aqua-input:focus {
  border-color: var(--aqua-color);
  box-shadow: 0 0 0 3.5px color-mix(in srgb, var(--aqua-color) 50%, transparent), 0 1px 4px rgba(0,0,0,0.10);
}

.graphite-input:focus {
  border-color: var(--graphite-color);
  box-shadow: 0 0 0 3.5px color-mix(in srgb, var(--graphite-color) 38%, transparent), 0 1px 4px rgba(0,0,0,0.10);
}

@media (prefers-color-scheme: light) {
  .aqua-input:focus, .graphite-input:focus {
    background: rgba(255,255,255,0.72);
  }
}

@media (prefers-color-scheme: dark) {
  .aqua-input:focus, .graphite-input:focus {
    background: rgba(255,255,255,0.16);
  }
}

.aqua-select {
  position: relative;
  display: inline-block;
  min-width: 160px;
}

.aqua-select-trigger {
  display: flex;
  align-items: stretch;
  border-radius: 999px;
  background: var(--aqua-background);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.08) 100%);
  border: 1.5px solid var(--aqua-border);
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: default;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  transition: border-color 0.18s ease, border-radius 0.28s cubic-bezier(0.34,1.1,0.64,1), background 0.18s ease, box-shadow 0.18s ease;
}

.aqua-select-value-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 16px;
  min-width: 0;
}

.aqua-select-value {
  font-size: 14px;
  font-weight: 400;
  color: var(--aqua-foreground-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.18s;
  flex: 1;
}

.aqua-select-value.selected {
  color: var(--aqua-foreground);
}

.aqua-select-cap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  flex-shrink: 0;
  background: var(--aqua-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.12) 100%);
  border-radius: 0 999px 999px 0;
  border-left: 1px solid rgba(0,0,0,0.10);
  transition: background 0.18s ease, border-radius 0.28s cubic-bezier(0.34,1.1,0.64,1);
}

.graphite-select .aqua-select-cap {
  background: var(--graphite-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.10) 100%);
}

.aqua-select-cap svg {
  width: 13px;
  height: 18px;
  flex-shrink: 0;
}

.aqua-select-panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: color-mix(in srgb, var(--aqua-background) 200%, white);
  border: 1.5px solid var(--aqua-border);
  border-radius: 20px;
  backdrop-filter: blur(50px) saturate(180%);
  -webkit-backdrop-filter: blur(50px) saturate(180%);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scaleY(0.85) translateY(-4px);
  transform-origin: top center;
  transition: opacity 0.22s ease, transform 0.26s cubic-bezier(0.34,1.2,0.64,1);
  z-index: 200;
}

.aqua-select.open .aqua-select-panel {
  opacity: 1;
  pointer-events: auto;
  transform: scaleY(1) translateY(0);
}

.aqua-select.open .aqua-select-trigger {
  border-radius: 18px 18px 0 0;
  border-bottom-color: transparent;
  background: color-mix(in srgb, var(--aqua-background) 200%, white);
  box-shadow: none;
}

.aqua-select.open .aqua-select-cap {
  border-radius: 0 18px 0 0;
}

.graphite-select.open .aqua-select-trigger {
  border-radius: 18px 18px 0 0;
  border-bottom-color: transparent;
  background: color-mix(in srgb, var(--aqua-background) 200%, white);
  box-shadow: none;
}

.aqua-select-panel-header {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid var(--aqua-border);
  cursor: default;
  background: color-mix(in srgb, var(--aqua-background) 200%, white);
}

.aqua-select-panel-header .aqua-select-value-wrap {
  padding: 8px 10px 8px 16px;
}

.aqua-select-panel-header .aqua-select-value {
  color: var(--aqua-foreground-muted);
}

.aqua-select-panel-header .aqua-select-cap {
  border-radius: 0;
  border-left: 1px solid rgba(0,0,0,0.10);
}

.aqua-select-option {
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 400;
  color: var(--aqua-foreground);
  cursor: default;
  transition: background 0.12s ease;
  white-space: nowrap;
}

.aqua-select-option:hover {
  background: color-mix(in srgb, var(--aqua-color) 12%, transparent);
}

.aqua-select-option.chosen {
  color: var(--aqua-color);
  font-weight: 600;
}

.aqua-select-option:last-child {
  padding-bottom: 12px;
}

.graphite-select .aqua-select-option:hover {
  background: color-mix(in srgb, var(--graphite-color) 12%, transparent);
}

.graphite-select .aqua-select-option.chosen {
  color: var(--graphite-color);
  font-weight: 600;
}

.aqua-slider {
  display: block;
  width: 100%;
  padding: 8px 0;
  cursor: default;
  user-select: none;
}

.aqua-slider-track {
  position: relative;
  height: 6px;
  border-radius: 999px;
  background: var(--aqua-background);
  border: 1px solid var(--aqua-border);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  overflow: visible;
}

.aqua-slider-fill {
  position: absolute;
  top: -1px;
  left: -1px;
  bottom: -1px;
  border-radius: 999px;
  background: var(--aqua-color);
  background-image: radial-gradient(ellipse 80% 70% at 40% 20%, rgba(255,255,255,0.30) 0%, transparent 65%), linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.10) 100%);
  pointer-events: none;
  transition: width 0.34s cubic-bezier(0.34,1.26,0.64,1);
}

.graphite-slider .aqua-slider-fill {
  background: var(--graphite-color);
  background-image: radial-gradient(ellipse 80% 70% at 40% 20%, rgba(255,255,255,0.22) 0%, transparent 65%), linear-gradient(to bottom, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.08) 100%);
}

.aqua-slider-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.96);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0) 100%);
  box-shadow: 0 1px 6px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.08);
  transition: left 0.34s cubic-bezier(0.34,1.26,0.64,1), opacity 0.16s ease, transform 0.18s ease;
  will-change: left, opacity;
  pointer-events: none;
}

@media (prefers-color-scheme: dark) {
  .aqua-slider-thumb {
    box-shadow: 0 1px 8px rgba(0,0,0,0.50), 0 0 0 1px rgba(255,255,255,0.12);
  }
}

.aqua-slider.dragging .aqua-slider-thumb {
  opacity: 0.55;
  transform: translate(-50%, -50%) scale(1.18);
  transition: none;
}

.aqua-slider.dragging .aqua-slider-fill  {
    transition: none;
}

.aqua-progress, .aqua-progress-indeterminate {
  display: block;
  width: 100%;
  height: 16px;
  border-radius: 999px;
  background: var(--aqua-background);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.00) 60%, rgba(255,255,255,0.06) 100%);
  border: 1px solid var(--aqua-border);
  box-shadow: inset 0 1.5px 3px rgba(0,0,0,0.06);
  overflow: hidden;
  position: relative;
}

@media (prefers-color-scheme: dark) {
  .aqua-progress, .aqua-progress-indeterminate {
    box-shadow: inset 0 1.5px 3px rgba(0,0,0,0.20);
  }
}

.aqua-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 999px;
  min-width: 14px;
  background-color: var(--aqua-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.44) 0%, rgba(255,255,255,0.18) 38%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.12) 100%);
  transition: width 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
  will-change: width;
  overflow: hidden;
}

.aqua-progress-fill::after {
  content: '';
  position: absolute;
  inset: -8px;
  background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 10px, color-mix(in srgb, var(--aqua-color) 70%, black 30%) 20px, transparent 30px);
  filter: blur(6px);
  transform: translateZ(0);
  will-change: background-position;
  animation: rib-scroll 0.4s linear infinite;
}

.graphite-progress .aqua-progress-fill {
  background-color: var(--graphite-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.36) 0%, rgba(255,255,255,0.14) 38%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.10) 100%);
}

.graphite-progress .aqua-progress-fill::after {
  background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 10px, color-mix(in srgb, var(--graphite-color) 60%, black 40%) 20px, transparent 30px);
  transform: translateZ(0);
  will-change: background-position;
  animation: rib-scroll 0.4s linear infinite;
}

@keyframes rib-scroll {
  from {
    background-position: 0px 0;
  } to {
    background-position: 36px 0;
  }
}

.aqua-progress-indeterminate {
  background-color: var(--aqua-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.14) 44%, rgba(255,255,255,0.00) 56%, rgba(255,255,255,0.10) 100%), repeating-linear-gradient(-135deg, var(--aqua-color) 0px, var(--aqua-color) 13px, rgba(255,255,255,0.48) 13px, rgba(255,255,255,0.48) 22px);
  background-size: 100% 100%, 31px 31px;
  animation: barber-scroll 0.65s linear infinite;
}

.aqua-progress-indeterminate.graphite-progress {
  background-color: var(--graphite-color);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.12) 44%, rgba(255,255,255,0.00) 56%, rgba(255,255,255,0.08) 100%), repeating-linear-gradient(-135deg, var(--graphite-color) 0px, var(--graphite-color) 13px, rgba(255,255,255,0.65) 13px, rgba(255,255,255,0.65) 22px);
  background-size: 100% 100%, 31px 31px;
}

@keyframes barber-scroll {
  from {
    background-position: 0% 0%, 0px 0px;
  } to {
    background-position: 0% 0%, 28px 0px;
  }
}

.aqua-scrollbar {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  border-radius: 999px;
  background: var(--aqua-background);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.00) 60%, rgba(255,255,255,0.06) 100%);
  border: 1px solid var(--aqua-border);
  box-shadow: inset 0 1.5px 3px rgba(0,0,0,0.06);
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

@media (prefers-color-scheme: dark) {
  .aqua-scrollbar {
    box-shadow: inset 0 1.5px 3px rgba(0,0,0,0.20);
  }
}

.aqua-scrollbar-track {
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;
}

.aqua-scrollbar-thumb {
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  border-radius: 999px;
  min-width: 20px;
  background-color: var(--aqua-color);
  background-image: radial-gradient(ellipse 90% 60% at 30% 20%, rgba(255,255,255,0.38) 0%, transparent 65%), linear-gradient(to bottom, rgba(255,255,255,0.44) 0%, rgba(255,255,255,0.16) 40%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.12) 100%);
  z-index: 1;
  overflow: hidden;
  transition: left 0.12s cubic-bezier(0.34,1.2,0.64,1), opacity 0.14s ease;
}

.aqua-scrollbar-thumb::after {
  content: '';
  position: absolute;
  inset: -5px;
  background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 10px, color-mix(in srgb, var(--aqua-color) 70%, black 30%) 20px, transparent 30px);
  background-position: calc(-1 * var(--thumb-left, 0px) - 5px) 0;
  filter: blur(4px);
}

.graphite-scrollbar .aqua-scrollbar-thumb { 
  background-color: var(--graphite-color);
}

.graphite-scrollbar .aqua-scrollbar-thumb::after {
  background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 10px, color-mix(in srgb, var(--graphite-color) 60%, black 40%) 20px, transparent 30px);
  background-position: calc(-1 * var(--thumb-left, 0px) - 5px) 0;
}

.aqua-scrollbar-button {
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  transition: background 0.12s ease;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
}

.aqua-scrollbar-button:hover {
  background: rgba(255,255,255,0.14);
}

.aqua-scrollbar-button:active {
  background: rgba(255,255,255,0.26);
}

.graphite-scrollbar .aqua-scrollbar-button:hover {
  background: rgba(0,0,0,0.08);
}

.graphite-scrollbar .aqua-scrollbar-button:active {
  background: rgba(0,0,0,0.18);
}

.aqua-scrollbar-button svg {
  width: 8px;
  height: 7px;
  flex-shrink: 0;
  color: inherit;
  fill: currentColor;
}

.aqua-scrollbar-buttons {
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
  border-left: 1px solid var(--aqua-border);
  position: relative;
  z-index: 2;
}

.aqua-scrollbar-buttons .aqua-scrollbar-button:first-child {
  border-right: 1px solid var(--aqua-border);
}

.aqua-scrollbar-buttons-end > .aqua-scrollbar-previous {
  border-right: 1px solid var(--aqua-border);
}

.aqua-scrollbar-buttons-end > .aqua-scrollbar-next {
  border-left: 1px solid var(--aqua-border);
}

.aqua-tabview-wrap {
  display: flex;
  padding: 12px 16px 14px;
  border-top: 1px solid var(--aqua-border);
  flex-shrink: 0;
  overflow-x: auto;
  scrollbar-width: none;
  min-width: 0;
}

.aqua-tabview-wrap::-webkit-scrollbar {
  display: none;
}

.aqua-tabview {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  background: var(--aqua-background);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 60%, rgba(255,255,255,0.04) 100%);
  border: 1px solid var(--aqua-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  user-select: none;
  touch-action: pan-y;
  flex-shrink: 0;
  margin: 0 auto;
}

@media (prefers-color-scheme: dark) {
  .aqua-tabview {
    box-shadow: 0 1px 4px rgba(0,0,0,0.30);
  }
}

.aqua-tabview-indicator {
  position: absolute;
  top: 4px;
  height: calc(100% - 8px);
  border-radius: 999px;
  background: rgba(225,229,238,0.95);
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.12) 100%);
  box-shadow: 0 1px 4px rgba(0,0,0,0.13);
  transition: left 0.34s cubic-bezier(0.34,1.26,0.64,1), width 0.34s cubic-bezier(0.34,1.26,0.64,1), opacity 0.16s ease;
  pointer-events: none;
  will-change: left, width, opacity;
}

@media (prefers-color-scheme: dark) {
  .aqua-tabview-indicator {
    background: rgba(255,255,255,0.15);
    box-shadow: 0 1px 4px rgba(0,0,0,0.40);
  }
}

.aqua-tabview-indicator.dragging {
  opacity: 0.55;
  transition: none;
}

.aqua-tabview-tab {
  position: relative;
  z-index: 1;
  padding: 6px 13px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: var(--aqua-foreground-muted);
  cursor: default;
  white-space: nowrap;
  transition: color 0.22s ease;
  -webkit-tap-highlight-color: transparent;
}

.aqua-tabview-tab.active {
  color: var(--aqua-foreground);
}

.aqua-tabview-tab.disabled {
  color: color-mix(in srgb, var(--aqua-foreground-muted) 50%, transparent);
  pointer-events: none;
}

@media (max-width: 640px) {
  .aqua-tabview-wrap {
    padding-left: 16px;
    padding-right: 16px;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 16px;
  }
}

/* Firefox-specific glass fix */
@supports (-moz-appearance: none) {
  .aqua-select-panel {
    background-color: rgba(255, 255, 255, 0.96) !important;
    backdrop-filter: blur(30px) saturate(140%) !important;
  }

  .aqua-select-panel-header {
    background-color: rgba(255, 255, 255, 0.95) !important;
  }

  @media (prefers-color-scheme: dark) {
    .aqua-select-panel {
      background-color: rgba(28, 28, 30, 0.97) !important;
      backdrop-filter: blur(35px) saturate(120%) !important;
    }

    .aqua-select-panel-header {
      background-color: rgba(40, 40, 42, 0.96) !important;
      border-bottom-color: rgba(255, 255, 255, 0.1) !important;
    }
  }
}
  `;

  document.head.appendChild(aqua);
})();

function aquaTabView(tabView) {
  const prefix = tabView.dataset.contentPrefix;
  const tabIndicator = tabView.querySelector('.aqua-tabview-indicator');
  const activeTabs = Array.from(tabView.querySelectorAll('.aqua-tabview-tab:not(.disabled)'));
  const allTabs = Array.from(tabView.querySelectorAll('.aqua-tabview-tab'));
  const wrap = tabView.closest('.aqua-tabview-wrap');

  function moveIndicator(tab, animate) {
    tabIndicator.style.transition = animate ? '' : 'none';
    tabIndicator.style.left = tab.offsetLeft + 'px';
    tabIndicator.style.width = tab.offsetWidth + 'px';
  }

  function scrollToTab(tab) {
    if (!wrap || tabView.scrollWidth <= wrap.clientWidth)
      return;

    const scrollDistance = tab.offsetLeft + tab.offsetWidth / 2 - wrap.clientWidth / 2;
    wrap.scrollTo({ left: Math.max(0, scrollDistance), behavior: 'smooth' });
  }

  function switchTab(tab, skipAnimation) {
    allTabs.forEach(t => {
      t.classList.remove('active');
      if (prefix) {
        const p = document.getElementById(prefix + '-' + t.dataset.tab);

        if (p)
          p.classList.remove('active');
      }
    });

    tab.classList.add('active');
    if (prefix) {
      const target = document.getElementById(prefix + '-' + tab.dataset.tab);

      if (target)
        target.classList.add('active');
    }

    moveIndicator(tab, !skipAnimation);
    scrollToTab(tab);
  }

  activeTabs.forEach(tab =>
    tab.addEventListener('click', () =>
      switchTab(tab, false))
  );

  let isDragging = false;

  function getTabAt(clientX) {
    const boundingRect = tabView.getBoundingClientRect();
    const relativeX = (clientX - boundingRect.left);
    let bestTab = activeTabs[0], bestDistance = Infinity;

    activeTabs.forEach(t => {
      const center = t.offsetLeft + t.offsetWidth / 2;
      const distance = Math.abs(relativeX - center);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestTab = t;
      }
    });

    return bestTab;
  }

  let draggingScrollFrame = null;
  const edgeZone = 80;

  function stopDraggingScroll() {
    if (draggingScrollFrame) {
      cancelAnimationFrame(draggingScrollFrame);
      draggingScrollFrame = null;
    }
  }

  function startDraggingScroll(cursorX)  {
    if (!wrap)
      return;

    stopDraggingScroll();

    const boundingRect = wrap.getBoundingClientRect();
    const zoneWidth = Math.min(edgeZone, boundingRect.width * 0.20);
    const leftEdge = boundingRect.left + zoneWidth;
    const rightEdge = boundingRect.right - zoneWidth;

    let speed = 0;
    if (cursorX < leftEdge)
      speed = -(1 - (cursorX - boundingRect.left) / zoneWidth);
    else if (cursorX > rightEdge)
      speed = (1 - (boundingRect.right - cursorX) / zoneWidth);

    speed = Math.max(-1, Math.min(1, speed));
    if (Math.abs(speed) < 0.04)
      return;

    const maxSpeed = 12;
    const pixelsToScroll = speed * maxSpeed;

    function tick() {
      wrap.scrollLeft += pixelsToScroll;
      draggingScrollFrame = requestAnimationFrame(tick);
    }
    draggingScrollFrame = requestAnimationFrame(tick);
  }

  function onPointerDown(e) {
    isDragging = true;
    tabIndicator.classList.add('dragging');
    tabView.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isDragging)
      return;

    const boundingRect = tabView.getBoundingClientRect();
    const indicatorWidth = parseFloat(tabIndicator.style.width || '0');
    const relativeX = (e.clientX - boundingRect.left);
    const maxLeft = tabView.scrollWidth - indicatorWidth;
    tabIndicator.style.left = Math.max(0, Math.min(relativeX - indicatorWidth / 2, maxLeft)) + 'px';
    const nearestTab = getTabAt(e.clientX);
    allTabs.forEach(t => t.classList.remove('active'));
    nearestTab.classList.add('active');
    startDraggingScroll(e.clientX);
  }

  function onPointerUp(e) {
    if (!isDragging)
      return;

    isDragging = false;
    stopDraggingScroll();
    tabIndicator.classList.remove('dragging');
    switchTab(getTabAt(e.clientX), false);
  }

  tabView.addEventListener('pointerdown', onPointerDown);
  tabView.addEventListener('pointermove', onPointerMove);
  tabView.addEventListener('pointerup', onPointerUp);
  tabView.addEventListener('pointercancel', onPointerUp);

  function initializeTab() {
    const activeTab = tabView.querySelector('.aqua-tabview-tab.active');

    if (!activeTab)
      return;

    moveIndicator(activeTab, false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        tabIndicator.style.transition = '';
      })
    );
  }

  return initializeTab;
}

const tabViews = document.querySelectorAll('.aqua-tabview');
const tabs = [];
tabViews.forEach(tab => tabs.push(aquaTabView(tab)));

function initializeTabs() {
  tabs.forEach(tab => tab && tab());
}

if (document.fonts?.ready)
  document.fonts.ready.then(initializeTabs);
else
  window.addEventListener('load', initializeTabs);

window.addEventListener('resize', () => {
  tabViews.forEach(tabView => {
    const activeTab = tabView.querySelector('.aqua-tabview-tab.active');
    const tabIndicator = tabView.querySelector('.aqua-tabview-indicator');

    if (!activeTab || !tabIndicator)
      return;

    tabIndicator.style.left = activeTab.offsetLeft + 'px';
    tabIndicator.style.width = activeTab.offsetWidth + 'px';
  });
});

document.querySelectorAll('.aqua-select').forEach(selector => {
  const trigger = selector.querySelector('.aqua-select-trigger');
  const panel = selector.querySelector('.aqua-select-panel');
  const value = trigger.querySelector('.aqua-select-value');
  const panelHeader = panel.querySelector('.aqua-select-panel-header');
  const options = panel.querySelectorAll('.aqua-select-option');

  const open = () => {
    selector.classList.add('open');
    const panelHeaderValue = panelHeader.querySelector('.aqua-select-value');

    if (panelHeaderValue)
      panelHeaderValue.textContent = value.textContent;
  };

  const close = () =>
    selector.classList.remove('open');

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    selector.classList.contains('open') ? close() : open();
  });

  panelHeader.addEventListener('click', e => {
    stopPropagation();
    close();
  });

  options.forEach(option => {
    option.addEventListener('click', e => {
      e.stopPropagation();
      options.forEach(choice => choice.classList.remove('chosen'));
      option.classList.add('chosen');
      value.textContent = option.textContent;
      value.classList.add('selected');
      close();
    });
  });

  document.addEventListener('click', e => {
    if (!selector.contains(e.target))
      close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape')
      close();
  });
});

document.querySelectorAll('.aqua-slider').forEach(slider => {
  const track = slider.querySelector('.aqua-slider-track');
  const fill = slider.querySelector('.aqua-slider-fill');
  const thumb = slider.querySelector('.aqua-slider-thumb');
  const min = parseFloat(slider.dataset.min ?? 0);
  const max = parseFloat(slider.dataset.max ?? 100);
  let value = parseFloat(slider.dataset.value ?? 50);

  function clamp(value) {
    return Math.max(min, Math.min(max, value));
  }

  function normalize(value) {
    return (clamp(value) - min) / (max - min);
  }

  function applyFraction(fraction, animate) {
    const percentage = fraction * 100;

    if (!animate) {
      fill.style.transition = 'none';
      thumb.style.transition = 'none';
    } else {
      fill.style.transition = '';
      thumb.style.transition = '';
    }

    fill.style.width = `calc(${percentage}% + 1px)`;
    thumb.style.left = `${percentage}%`;
    value = min + fraction * (max - min);
    slider.dataset.value = Math.round(value);
  }

  function pointerFraction(clientX) {
    const boundingRect = track.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - boundingRect.left) / boundingRect.width));
  }

  applyFraction(normalize(value), false);
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      fill.style.transition = '';
      thumb.style.transition = '';
    })
  );

  let isDragging = false;

  function onPointerDown(e) {
    isDragging = true;
    slider.classList.add('dragging');
    slider.setPointerCapture(e.pointerId);
    applyFraction(pointerFraction(e.clientX), true);
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isDragging)
      return;

    applyFraction(pointerFraction(e.clientX), false);
  }

  function onPointerUp(e) {
    if (!isDragging)
      return;

    isDragging = false;
    slider.classList.remove('dragging');
    applyFraction(pointerFraction(e.clientX), true);
  }

  slider.addEventListener('pointerdown', onPointerDown);
  slider.addEventListener('pointermove', onPointerMove);
  slider.addEventListener('pointerup', onPointerUp);
  slider.addEventListener('pointercancel', onPointerUp);
});

function aquaProgressIndicator(progressIndicator) {
  const fill = progressIndicator.querySelector('.aqua-progress-fill');

  if (!fill)
    return;

  function setValue(value) {
    const percentage = Math.max(0, Math.min(100, value));
    fill.style.width = percentage + '%';
    progressIndicator.dataset.value = Math.round(percentage);
  }

  setValue(parseFloat(progressIndicator.dataset.value ?? 50));
}

document.querySelectorAll('.aqua-progress').forEach(aquaProgressIndicator);

document.querySelectorAll('.aqua-scrollbar').forEach(scrollbar => {
  const track = scrollbar.querySelector('.aqua-scrollbar-track');
  const thumb = scrollbar.querySelector('.aqua-scrollbar-thumb');
  const previous = scrollbar.querySelector('.aqua-scrollbar-previous');
  const next = scrollbar.querySelector('.aqua-scrollbar-next');

  if (!track || !thumb)
    return;

  const thumbSize = parseFloat(scrollbar.dataset.thumbSize ?? 30);
  let currentValue = Math.max(0, Math.min(100, parseFloat(scrollbar.dataset.value ?? 0)));

  function applyValue(value, animate) {
    currentValue = Math.max(0, Math.min(100, value));
    const trackWidth = track.getBoundingClientRect().width;
    const thumbWidth = (thumbSize / 100) * trackWidth;
    const maxLeft = trackWidth - thumbWidth - 4;
    const leftPixels = 2 + (currentValue / 100) * maxLeft;

    if (!animate) {
      thumb.style.transition = 'none';
      requestAnimationFrame(() => {
        thumb.style.transition = '';
      });
    }

    thumb.style.left = leftPixels + 'px';
    thumb.style.setProperty('--thumb-left', leftPixels + 'px');
    thumb.style.width = thumbWidth + 'px';
    scrollbar.dataset.value = Math.round(currentValue);
  }

  requestAnimationFrame(() => applyValue(currentValue, false));

  track.addEventListener('pointerdown', e => {
    if (e.target === thumb || thumb.contains(e.target))
      return;

    const boundingRect = track.getBoundingClientRect();
    const thumbWidth = (thumbSize / 100) * boundingRect.width;
    const clientX = e.clientX - boundingRect.left - thumbWidth / 2;
    const maxLeft = boundingRect.width - thumbWidth - 4;
    applyValue((clientX / maxLeft) * 100, true);
    e.preventDefault();
  });

  let isDragging = false, dragX = 0, dragStartValue = 0;
  thumb.addEventListener('pointerdown', e => {
    isDragging = true;
    dragX = e.clientX;
    dragStartValue = currentValue;
    thumb.setPointerCapture(e.pointerId);
    scrollbar.classList.add('dragging');
    e.stopPropagation();
    e.preventDefault();
  });

  thumb.addEventListener('pointermove', e => {
    if (!isDragging)
      return;

    const trackWidth = track.getBoundingClientRect().width;
    const thumbWidth = (thumbSize / 100) * trackWidth;
    const maxLeft = trackWidth - thumbWidth - 4;
    const deltaX = e.clientX - dragX;
    applyValue(dragStartValue + (deltaX / maxLeft) * 100, false);
  });

  const stopDraggingScroll = () => {
    isDragging = false;
    scrollbar.classList.remove('dragging');
  };

  thumb.addEventListener('pointerup', stopDraggingScroll);
  thumb.addEventListener('pointercancel', stopDraggingScroll);

  const step = 5;

  function startScrolling(direction) {
    applyValue(currentValue + direction * step, true);
    let timer = setTimeout(function repeat() {
      applyValue(currentValue + direction * step, false);
      timer = setTimeout(repeat, 40);
    }, 300);

    const stopScrolling = () => {
      clearTimeout(timer);
      document.removeEventListener('pointerup', stopScrolling);
    }

    document.addEventListener('pointerup', stopScrolling);
  }

  if (previous)
    previous.addEventListener('pointerdown', e => {
      startScrolling(-1);
      e.preventDefault();
    });
  
  if (next)
    next.addEventListener('pointerdown', e => {
      startScrolling(+1);
      e.preventDefault();
    });

  window.addEventListener('resize', () => applyValue(currentValue, false), { passive: true });
});
