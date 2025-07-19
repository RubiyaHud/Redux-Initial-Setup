## Redux Setup
- Go to the link [Redux Toolkit Quick Start](https://redux.js.org/tutorials/quick-start)
- Type the command in the `Gitbash` terminal

  ```
    npm install @reduxjs/toolkit react-redux  
  ```
- Check the installation
  
  <img width="746" height="945" alt="image" src="https://github.com/user-attachments/assets/a5641f8d-0eb6-4796-abd3-d38ce5ea3d49" />

- **Create a Redux Store:**
    - Create a file named `src/store.js`.
    - Import the `configureStore` API from Redux Toolkit.
    - We'll start by creating an empty Redux store, and exporting it:
      
    ```
    import { configureStore } from '@reduxjs/toolkit'
  
    export default configureStore({
      reducer: {}
    })
    ```
    - This creates a Redux store, and also automatically configure the Redux DevTools extension so that we can inspect the store while developing.
  
- **Provide the Redux Store to React**
  - Once the store is created, we can make it available to our React components by putting a React-Redux `<Provider>` around our application in `src/main.jsx`.
  - Import the Redux store we just created, put a `<Provider>` around your `<App>`, and pass the store as a prop:
  ```main.jsx
      import { createRoot } from 'react-dom/client'
      import { BrowserRouter } from 'react-router-dom';
      import './index.css'
      import App from './App.jsx'
      import { Provider } from 'react-redux'
      import myStore from './store.js';
      
      createRoot(document.getElementById('root')).render(
        // store is a prop name
        <Provider store={myStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
  ```



