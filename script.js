body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  --s: 25vmin;
  --p: calc(var(--s) / 2);
  --c1: #FF69B4; /* яркий розовый */
  --c2: #1E90FF; /* яркий голубой */
  --c3: #FFFFFF; /* белый */
  --bg: var(--c3);
  --d: 10000ms;
  --e: cubic-bezier(0.76, 0, 0.24, 1);
  background-color: var(--bg);
  background-image:
      linear-gradient(45deg, var(--c1) 25%, transparent 25%),
      linear-gradient(-45deg, var(--c1) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--c2) 75%),
      linear-gradient(-45deg, transparent 75%, var(--c2) 75%);
  background-size: var(--s) var(--s);
  background-position:
      calc(var(--p) *  1) calc(var(--p) *  0),
      calc(var(--p) * -1) calc(var(--p) *  1),
      calc(var(--p) *  1) calc(var(--p) * -1),
      calc(var(--p) * -1) calc(var(--p) *  0);
  animation:
      color var(--d) var(--e) infinite,
      position var(--d) var(--e) infinite;
}

@keyframes color {
  0%, 25% { --bg: var(--c3); }
  26%, 50% { --bg: var(--c1); }
  51%, 75% { --bg: var(--c3); }
  76%, 100% { --bg: var(--c2); }
}

@keyframes position {
  0% {
      background-position:
          calc(var(--p) *  1) calc(var(--p) *  0),
          calc(var(--p) * -1) calc(var(--p) *  1),
          calc(var(--p) *  1) calc(var(--p) * -1),
          calc(var(--p) * -1) calc(var(--p) *  0);
  }
  25% {
      background-position:
          calc(var(--p) *  1) calc(var(--p) *  4),
          calc(var(--p) * -1) calc(var(--p) *  5),
          calc(var(--p) *  1) calc(var(--p) *  3),
          calc(var(--p) * -1) calc(var(--p) *  4);
  }
  50% {
      background-position:
          calc(var(--p) *  3) calc(var(--p) * 8),
          calc(var(--p) * -3) calc(var(--p) * 9),
          calc(var(--p) *  2) calc(var(--p) * 7),
          calc(var(--p) * -2) calc(var(--p) * 8);
  }
  75% {
      background-position:
          calc(var(--p) *  3) calc(var(--p) * 12),
          calc(var(--p) * -3) calc(var(--p) * 13),
          calc(var(--p) *  2) calc(var(--p) * 11),
          calc(var(--p) * -2) calc(var(--p) * 12);
  }
  100% {
      background-position:
          calc(var(--p) *  5) calc(var(--p) * 16),
          calc(var(--p) * -5) calc(var(--p) * 17),
          calc(var(--p) *  5) calc(var(--p) * 15),
          calc(var(--p) * -5) calc(var(--p) * 16);
  }
}

@media (prefers-reduced-motion) {
  body { animation: none; }
}

.score {
  text-align: center;
  font-size: 50px;
  margin: 20px 0;
  position: absolute;
  top: 40px;
  width: 100%;
  -webkit-text-stroke: 1px black;
  color: white;
}

.clicker {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.clicker img {
  width: 250px;
  height: 250px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.clicker img.clicked {
  transform: scale(0.9);
}

.floating-score {
  position: absolute;
  font-size: 24px;
  color: #ffffff;
  pointer-events: none;
  animation: floatUp 1.5s ease-in-out forwards;
}

@keyframes floatUp {
  0% {
      opacity: 1;
      transform: translateY(0);
  }
  100% {
      opacity: 0;
      transform: translateY(-50px);
  }
}

.menu-container {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
}

.menu-item {
  user-select: none; /* Запрещает выделение текста */
  -webkit-user-select: none; /* Для Safari и Chrome */
  -moz-user-select: none; /* Для Firefox */
  -ms-user-select: none; /* Для Internet Explorer/Edge */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  color: #fff;
  border-radius: 20px;
  position: relative;
  margin: 0 10px;
  background: linear-gradient(135deg, rgba(0, 17, 255, 0.7), rgba(0, 17, 255, 0.9));
}

.menu-item:hover {
  background-color: rgba(51, 51, 51, 0.8);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.menu-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
  width: 1px;
  background: rgba(0, 0, 0, 0.5);
}

.menu-item i {
  margin-bottom: 5px;
  transition: transform 0.3s;
}

.menu-item:hover i {
  transform: scale(1.2);
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: rgba(0, 0, 0, 0.8);
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  text-align: center;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.modal-content img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.close {
  color: #aaa;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.upgrades-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.upgrades-list li {
  padding: 10px;
  border-bottom: 1px solid #888;
  transition: background-color 0.3s;
}

.upgrades-list li:last-child {
  border-bottom: none;
}

.upgrades-list li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
  .menu-container {
      align-items: center;
  }

  .menu-item {
      margin: 5px 0;
      padding: 15px;
      font-size: 14px;
  }

  .menu-item i {
      font-size: 20px;
      margin-bottom: 3px;
  }

  .menu-item:not(:last-child)::after {
      content: '';
      align-items: center;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      height: 50%;
      width: 1px;
      background: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
      margin: 20% auto;
      width: 90%;
      padding: 15px;
  }

  .modal-content img {
      width: 80px;
      height: 80px;
  }

  .score {
      font-size: 30px;
      top: 20px;
  }

  .clicker {
      height: auto;
      min-height: 100vh;
  }

  .clicker img {
      width: 200px;
      height: 200px;
  }

  body {
      --s: 50vmin;
      --d: 20000ms;
  }
}

.menu-item:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
