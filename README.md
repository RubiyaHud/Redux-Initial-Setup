## Redux Setup
- Go to the link [Redux Toolkit Quick Start](https://react-redux.js.org/tutorials/quick-start)
- Type the command in the `Gitbash` terminal

  ```
    npm install @reduxjs/toolkit react-redux  
  ```
- Check the installation
  
  <img width="746" height="945" alt="image" src="https://github.com/user-attachments/assets/a5641f8d-0eb6-4796-abd3-d38ce5ea3d49" />

- **Create a Redux Store:**
    - Create a file named `src/store.js`and Copy-paste the code below.
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
  - Copy-paste the code below to `main.jsx`
  - Once the store is created, we can make it available to our React components by putting a React-Redux `<Provider>` around our application in `src/main.jsx`.
  - Import the Redux store we just created, put a `<Provider>` around your `<App>`, and pass the store as a prop:
    
  ```
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
- **Create a Redux State Slice**
    - Create a folder named `src/slices`
    - Add a new file named `src/slices/counterSlice.jsx`
    - `counterSlice` can hold one/multiple `Reducer Functions` for specific `Actions`. 
    
- **Add Slice Reducers to the Store**
    - Next, we need to import the reducer function from the counter slice and add it to our `store`.
    - By defining a field inside the `reducer` parameter, we tell the store to use this slice reducer function to handle all updates to that state.
    - <img width="547" height="244" alt="image" src="https://github.com/user-attachments/assets/eccaa5a0-6a38-4dd5-b51f-1e5c63e259c8" />

- **Add Redux DevTools** 
    - Go to the google chrome extension and add `Redux DevTools`
    - <img width="1114" height="734" alt="image" src="https://github.com/user-attachments/assets/42d6e587-985d-4791-afd5-341e11a59dad" />

    - Open inspect my right mouseclick and click the `Redux->State`. We can see the store named `counter` and it's inital value '0'
 
    - <img width="1919" height="794" alt="image" src="https://github.com/user-attachments/assets/9eccedeb-a353-464c-94bc-d9508278f750" />












    

