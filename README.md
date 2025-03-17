# Simon Game

A simple **Simon Game** built using HTML, CSS, and JavaScript. The game tests the player's memory by generating a sequence of button flashes that the player must repeat correctly to advance to higher levels.

## 📌 Features

- **Level-based gameplay**: The difficulty increases as the player progresses.
- **Interactive UI**: Buttons flash to indicate the sequence.
- **Local Storage Support**: Keeps track of the highest score.
- **Keyboard & Mouse Support**: Starts with a keypress and interacts with clicks.

## 🚀 How to Play

1. Press any key to start the game.
2. Watch the buttons flash in a sequence.
3. Click the buttons in the same order.
4. If you enter the correct sequence, you move to the next level.
5. If you make a mistake, the game ends, and your score is displayed.
6. Try to beat your highest score!

## 🛠️ Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling for game buttons and UI.
- **JavaScript**: Game logic, event handling, and local storage.

## 📂 Project Structure

/Simon-Game
│── index.html       # Main HTML file
│── styles.css       # CSS for styling the game
│── app.js           # JavaScript game logic
└── README.md        # Documentation file

## 📜 Code Explanation (app.js)

- Maintains two arrays:  
  - `gameSeq[]`: Stores the game-generated sequence.  
  - `userSeq[]`: Stores the player’s input sequence.  

- **Gameplay Logic**:
  - A random button is chosen at each level.
  - The player must repeat the sequence correctly.
  - If the sequence is correct, the level increases.
  - If incorrect, the game ends, and the highest score is updated.

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Simon-Game.git
2. Open index.html in a browser.
3. Start playing!

## 🎮 Demo



