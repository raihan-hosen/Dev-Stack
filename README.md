# Dev Stack — Build Your Ideal Tech Stack

A modern, responsive web application built with React, TypeScript, Tailwind CSS, and DaisyUI that allows developers to explore curated tools and technologies, manage their custom tech stack interactively, and get instant notifications via React-Toastify.

## 🚀 About the Project

Dev Stack is designed to help developers and teams plan their ideal project architecture. It features async data loading from a local JSON file, robust stack management with duplicate prevention, a clean light-themed UI, and responsive navigation and footer sections tailored for mobile, tablet, and desktop views.

## 🛠️ Technologies Used

* **React.js (with Vite)** — Frontend component-based library and build tool
* **TypeScript** — Static typing for safer and more maintainable code
* **Tailwind CSS & DaisyUI** — Utility-first styling and pre-built UI components
* **React-Toastify** — Notification alerts for user interactions

## ✨ Key Features

1. **Interactive Technology Explorer:** Browse through a 3-column responsive grid of technologies with metadata including difficulty ratings, categories, and badges.
2. **Custom Stack Sidebar Management:** Add or remove items dynamically to your stack, track selected slots, and clear your entire stack in one click with stylized outline-to-red hover triggers.
3. **Toast Notifications & Responsive Design:** Get real-time feedback alerts when adding, removing, or clearing items, fully optimized for seamless mobile and desktop navigation.

---

## 📝 React Concept Answers

1. **What is JSX, and why is it used in React?**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like structures directly inside my JavaScript files. It is used in React because it makes code more readable and expressive when describing UI components and structure.
2. **What is the difference between props and state?**
Props (properties) are read-only data passed down from a parent component to a child component. State is local, changable data managed *within* a component that changes over time based on user interaction or actions, triggering re-renders when updated.
3. **What does the `useState` hook do, and where did you use it in this project?**
The `useState` hook allows functional components to manage local state variables. In this project, it was used to store and update the fetched technology list, manage the user's selected stack items, and control component states.
4. **What does the `useEffect` hook do, and why did you need it to load the JSON data?**
The `useEffect` hook handles side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations. It was needed to fetch `technologies.json` asynchronously when the component first mounts so the data loads cleanly without blocking the main render loop.
5. **Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop internally to identify which items have changed, been added, or been removed in a list. Unique keys optimize rendering performance by allowing React to precisely track component identities across re-renders instead of re-creating the entire DOM tree.
6. **What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering is the practice of rendering different UI elements or components based on specific conditions (like checking if data exists). An example used in this project is checking if the stack is empty to conditionally render a placeholder message or the selected stack items list:
```tsx
{stack.length === 0 ? <EmptyState /> : <StackList />}

```


7. **How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data is passed from a parent to a child via **props** (attributes passed down in JSX). A child sends information or signals back to the parent by executing a **callback function** passed down via props from the parent, allowing the child to invoke it with arguments when an event occurs.
