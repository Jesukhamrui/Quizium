# Quizium

A modern quiz application built with React and Vite. Supports multiple subjects, randomized questions, scoring, grading, and certificate generation.

## Features
- Subject selection
- Randomized questions per quiz
- Score calculation and grading
- Certificate generation and download
- Responsive, modern UI with Tailwind CSS
- Modular code structure for easy maintenance

## File Structure

```
quiz-app/
├── public/
│   ├── index.html
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.js
│   ├── index.css
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Certificate.jsx
│   │   ├── QuizApp.jsx
│   │   ├── QuizQuestion.jsx
│   │   ├── ResultScreen.jsx
│   │   ├── StartScreen.jsx
│   │   ├── SubjectSelection.jsx
│   ├── data/
│   │   └── questions.js
│   ├── styles/
│   │   ├── index.css
│   │   └── QuizApp.css
│   ├── utils/
│   │   ├── certificateGenerator.js
│   │   └── quizHelpers.js
├── package.json
├── README.md
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization
- Add or edit quiz questions in `src/data/questions.js`
- Update styles in `src/styles/` or use Tailwind classes
- Extend functionality by adding new components in `src/components/`

## Technologies Used
- React
- Vite
- Tailwind CSS
- ESLint

## Credits
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---
Feel free to modify and expand this app for your own quiz needs!
