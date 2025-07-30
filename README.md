# Redux Setup
### 1. **Installation**
  - Go to the link [Redux Toolkit Quick Start](https://react-redux.js.org/tutorials/quick-start)
  - Type the command in the `Gitbash` terminal
  
    ```
      npm install @reduxjs/toolkit react-redux  
    ```
  - Check the installation
    
    <img width="746" height="945" alt="image" src="https://github.com/user-attachments/assets/a5641f8d-0eb6-4796-abd3-d38ce5ea3d49" />

### 2. **Create a Redux Store:**
  - Create a file named `src/store.js`and Copy-paste the code below.
  - Here, we import the `configureStore` API from `Redux Toolkit`.
  - We'll start by creating an <ins>empty</ins> Redux store, and exporting it:
  - ```
        import { configureStore } from '@reduxjs/toolkit'
      
        export default configureStore({
          reducer: {}
        })
        
      
    ```
  - This creates a `Redux store`, and also automatically configure the Redux DevTools extension so that we can inspect the store while developing.
  
### 3. **Provide the Redux Store to React**
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
### 4. **Create a Redux State Slice**
  - Create a folder named `src/slices`
  - Add a new file named `src/slices/counterSlice.jsx`
    - `counterSlice` can hold one/multiple `Reducer Functions` for specific `Actions`.
    - Initial code for `counterSlice` is given below: [File Link](https://github.com/RubiyaHud/Redux-Initial-Setup/blob/main/src/slices/counterSlice.jsx) 
      
        <img width="539" height="636" alt="image" src="https://github.com/user-attachments/assets/be317cde-43a5-41bd-a2d6-3f8ccc1988b6" />
        <img width="780" height="653" alt="image" src="https://github.com/user-attachments/assets/deaab726-cc5c-4910-bbae-b7f46c0eb41f" />



### 5. **Add Slice Reducers to the Store**
  - Next, we need to import the `reducer function` from the `counter slice` and add it to our `store`
  - By defining a field inside the `reducer` parameter, we tell the store to use this slice reducer function to handle all updates to that state.
    - <img width="547" height="244" alt="image" src="https://github.com/user-attachments/assets/eccaa5a0-6a38-4dd5-b51f-1e5c63e259c8" />

### 6. **Add Redux DevTools**
  - Go to the google chrome extension and add `Redux DevTools`
      <img width="1114" height="734" alt="image" src="https://github.com/user-attachments/assets/42d6e587-985d-4791-afd5-341e11a59dad" />

  - Open inspect by mouse right-click, then click the `Redux->State`. We can see the store `counter` and it's inital value `0`
 
      <img width="1919" height="794" alt="image" src="https://github.com/user-attachments/assets/9eccedeb-a353-464c-94bc-d9508278f750" />
    
      - Here, store name is coming from `store.js` and the initial-value is coming from `counterSlice.jsx`
      
        <img width="547" height="249" alt="image" src="https://github.com/user-attachments/assets/966eebb3-e7c3-4934-ac13-8147f30909da" />
      
        <img width="798" height="665" alt="image" src="https://github.com/user-attachments/assets/ce2232dc-4436-42b0-9088-2dabb9840724" />


### 7. **Use Redux State and Actions in React Components**
  - Now we can use the <ins>React Redux hooks</ins> to let <ins>React components</ins> interact with the `Redux store`
  - We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`
  - Now, Create a `button` on an existing page `src/components/pages/Shop.js`[link](https://github.com/RubiyaHud/Redux-Initial-Setup/blob/main/src/components/pages/Shop.jsx), which `Increment the Counter value by 1`
      <img width="1136" height="846" alt="image" src="https://github.com/user-attachments/assets/13cbd19f-4ee5-4a5c-9124-8684d72061e0" />
      <img width="750" height="470" alt="image" src="https://github.com/user-attachments/assets/7106a666-44aa-4f3f-829e-dd960390f25c" />














    

