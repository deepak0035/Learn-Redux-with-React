
# Learning Redux with React

This project serves as a practical guide for learning the core concepts of Redux with React. Redux is a powerful state management library commonly used in React applications to efficiently manage and access application state.
## UI Overview
![reduxExample Code](https://github.com/deepak0035/Redux-Doc-with-example-Code/assets/64684117/e14a2bf3-f0f2-400d-bc36-a7a5a1538b9a)

## Redux Basics

- Redux is used for state management, helping to avoid prop drilling and useContext.
- It provides a centralized store for the application's state, making data management more organized.
- Components can access this central store to retrieve and update data without the need for passing data through multiple levels of props.

## Main Topics

### Action

- An action is a plain JavaScript object that defines what to do within the application.
- **Syntax**:
  ```javascript
  {
    type: "INCREMENT",
    payload: 5
  }
  ```
- **Example**:
  ```javascript
  const incrementAction = {
    type: "INCREMENT",
    payload: 5
  };
  ```

### Action Creator

- Action creators are pure functions that create actions.
- **Syntax**:
  ```javascript
  export const increment = (amount) => {
    return {
      type: "INCREMENT",
      payload: amount
    };
  }
  ```
- **Example**:
  ```javascript
  const increment = (amount) => {
    return {
      type: "INCREMENT",
      payload: amount
    };
  }
  ```

### Reducers

- Reducers are functions that take the current state and an action, returning a new state.
- **Syntax**:
  ```javascript
  const reducer = (state, action) => {
    // Check the action type and return a new state accordingly.
  }
  ```
- **Example**:
  ```javascript
  const counterReducer = (state = 0, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    }
    return state;
  }
  ```

### Store

- The store is a centralized storage of the application's state, created with `createStore()` in Redux.
- There is only one store in a Redux application.
- It has a single root reducer function.
- **Syntax**:
  ```javascript
  import { createStore } from "redux";
  const store = createStore(rootReducer);
  ```

### Redux Principles

- Single source of truth: The global state is stored in one store, making it easy to manage and access data.
- State is read-only: The only way to change the state is by dispatching actions.
- Immutability: Data flows in a one-way direction, ensuring predictability of outcomes.
- Changes are made using pure reducer functions.

### Provider Component

- The `<Provider>` component from the `react-redux` library is used to wrap your React application.
- It provides access to the Redux store, allowing your components to connect to and interact with the store.

#### Usage

Wrap your entire React application with the `<Provider>` component, passing in the Redux store as a prop.

**Example**:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // Your root reducer

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    {/* Your app components go here */}
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

By including the `<Provider>` component in your application, you ensure that your components have access to the Redux store, making it easier to connect and manage state in your application.

### useSelector Hook

- `useSelector` is a hook provided by the `react-redux` library that allows functional components to select and read data from the Redux store.

**Syntax**:

```javascript
import { useSelector } from 'react-redux';

const selectedData = useSelector(selectorFunction);
```

**Example**:

```javascript
import { useSelector } from 'react-redux';

function DisplayCounter() {
  const count = useSelector(state => state.counter);
  return <p>Count: {count}</p>;
}
```

### useDispatch Hook

- `useDispatch` is a hook provided by `react-redux` for dispatching actions in functional components.

**Syntax**:

```javascript
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
```

**Example**:

```javascript
import { useDispatch } from 'react-redux';
import { increment } from './actions';

function CounterButton() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  return <button onClick={handleIncrement}>Increment</button>;
}
```

This project provides hands-on experience with Redux and React to help you become proficient in state management for your React applications.

Happy learning!
```
