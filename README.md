# ⚡ FOCUS LAB v2.0 | Redux Toolkit Task System

A high-performance, aesthetically driven Task Management Protocol built with **React**, **Redux Toolkit**, and **Tailwind CSS v4**. This project focuses on mastering centralized state management with a "Cyber-Glass" user interface.



## 🧪 Tech Stack

- **Frontend:** React 18+ (Vite)
- **State Management:** Redux Toolkit (Slices & Store)
- **Styling:** Tailwind CSS v4 (Glassmorphism, Animated Blobs)
- **Icons:** HeroIcons
- **Utility:** NanoID (for unique task identification)

## 🚀 Key Features

- **Centralized Logic:** State is managed through a single source of truth using Redux.
- **Protocol Execution:** - **Add:** Create new tasks with unique IDs.
  - **Edit:** Update task messages inline.
  - **Toggle:** Mark tasks as complete with visual "glow" feedback.
  - **Delete:** Remove tasks from the buffer.
- **Cyber-Aesthetic:** Features a dark-mode optimized UI with grainy overlays and indigo/fuchsia blur effects.
- **Empty State Logic:** Custom feedback when no tasks are present in the Redux store.

## 🛠️ Installation & Setup

1. **Clone the repository**
   bash
   git clone [https://github.com/zayanwaris7-hash/ReduxToolKit-Practice-ToDoApp-.git](https://github.com/zayanwaris7-hash/ReduxToolKit-Practice-ToDoApp-.git)
   cd ReduxToolKit-Practice-ToDoApp-
Install dependencies

Bash
npm install
Launch Development Server

Bash
npm run dev

---


## 🏗️ Project Architecture
Plaintext
```text
src/
├── Components/
│   ├── InputBox.jsx      # Handles Task creation (Dispatching AddTodo)
│   ├── TodoList.jsx      # Individual task management (Edit, Toggle, Delete)
│   └── EmptyState.jsx    # UI for empty task buffer
├── Redux/
│   ├── store.js          # Main Redux Store configuration
│   └── TodoSlice.js      # Reducers and Action logic
└── App.jsx               # Main Layout & Global State Selector
```

## 📝 Learning Outcomes
This project was built to practice the following Redux patterns:

### Immutability with Immer:
Using Redux Toolkit to mutate state safely (e.g., state.push()).
### Complex Payloads:
Passing objects as payloads to update specific task properties.
### Select and Dispatch:
Effectively using useSelector to read state and useDispatch to trigger changes.

## 📄 License
Distributed under the MIT License.

Developed by Zayan Waris
