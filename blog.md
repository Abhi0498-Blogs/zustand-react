## In this article

- [In this article](#in-this-article)
- [Introduction](#introduction)
- [Global State](#global-state)
  - [Why Zustand over Redux?](#why-zustand-over-redux)
- [Getting Started](#getting-started)
  - [Refactoring the App Component](#refactoring-the-app-component)
  - [Creating Components](#creating-components)
    - [Button Component](#button-component)
    - [Counter Component](#counter-component)
  - [Leveraging Zustand's Power](#leveraging-zustands-power)
- [Conclusion](#conclusion)

## Introduction

In any React application, efficiently sharing state between components is crucial. While React's Context API is suitable for simple applications, complex ones demand a more robust solution. That's where Zustand comes into play. In React, we often turn to Redux for global state management, but Zustand offers a lightweight alternative. It leverages React Hooks API, boasts a small bundle size, and seamlessly integrates with TypeScript. In this article, we'll explore how to harness Zustand for global state management in React applications.

## Global State

### Why Zustand over Redux?

Before diving into Zustand, let's briefly consider why you might prefer it over Redux:

- **Lightweight**: Zustand is a compact, fast, and scalable state management library.
- **Hooks-Based**: It's built on top of React Hooks API, making it more intuitive for React developers.
- **Minimal Boilerplate**: Zustand significantly reduces the amount of boilerplate code compared to Redux.
- **TypeScript-Friendly**: It easily integrates with TypeScript, ensuring strong type checking.

In summary, Zustand presents a simple yet powerful alternative to Redux for handling global state in React applications.

## Getting Started

To demonstrate how Zustand works, let's create a new React application. For this tutorial, we'll use Vite, but you can use any other tool of your choice. First, create a new project:

```bash
npm create vite-app zustand-react
```

After generating the project, you can delete the unnecessary files, leaving you with the following folder structure:

![Project Structure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7j5beza8eyc0nqxr42sq.png)

Now, let's install Zustand:

```bash
npm install zustand
```

To start the development server, run:

```bash
npm run dev
```

### Refactoring the App Component

In the initial code, the `App` component manages a counter using the `useState` hook. We will refactor this code to use Zustand for state management.

```tsx
import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Counter />
    </>
  );
}

export default App;
```

In this refactored version, we've removed the `count` and `setCount` states from the `App` component, as we'll use Zustand to manage the state of the counter.

### Creating Components

Now, let's create two components for our counter: `Button` and `Counter`.

#### Button Component

```tsx
import React from "react";
import useCounter from "../store/counter";

const Button = ({ children, action }) => {
  const { increase, decrease } = useCounter();

  const handleClick = action === "increase" ? increase : decrease;

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
```

In this updated `Button` component, we've removed the `setCount` prop and are instead using the `increase` and `decrease` functions from the `useCounter` hook.

#### Counter Component

```tsx
import React from "react";
import Button from "./Button";
import useCounter from "../store/counter";

const Counter = () => {
  const { count } = useCounter();

  return (
    <>
      <div className="card">
        <Button action="increase">Increase</Button>
        <div>{count}</div>
        <Button action="decrease">Decrease</Button>
      </div>
    </>
  );
};

export default Counter;
```

In the refactored `Counter` component, we've eliminated the need for `count` and `setCount` props by utilizing the `count` state from the `useCounter` hook.

### Leveraging Zustand's Power

To showcase the full potential of Zustand, let's enhance our `counter` store.

```js
// store/counter.js
import { create } from "zustand";

const useCounter = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounter;
```

Here, we've added `increase` and `decrease` functions to the store. These functions update the `count` state using the `set` function provided by Zustand.

Now, let's update the `Button` component to utilize these functions directly:

```tsx
// components/Button.jsx
import React from "react";
import useCounter from "../store/counter";

const Button = ({ children, action }) => {
  const { increase, decrease } = useCounter();

  const handleClick = action === "increase" ? increase : decrease;

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
```

By doing this, we've eliminated the need for the `setCount` prop in the `Button` component, showcasing Zustand's simplicity in state management.

## Conclusion

In this article, we've explored how Zustand can be a lightweight yet robust alternative to Redux for global state management in React applications. By centralizing state management in a store and leveraging hooks, Zustand simplifies complex state management scenarios, reducing the need for prop drilling and boilerplate code.

To learn more about Zustand and its advanced features, refer to the official documentation and consider using it in your future React projects for efficient global state management.

Happy coding! 🚀
