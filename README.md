## Redux Setup
- Go to the link [Redux Toolkit Quick Start](https://redux.js.org/tutorials/quick-start)
- Type the command in the `Gitbash` terminal

  ```
    npm install @reduxjs/toolkit react-redux  
  ```
- Check the installation
  
  <img width="746" height="945" alt="image" src="https://github.com/user-attachments/assets/a5641f8d-0eb6-4796-abd3-d38ce5ea3d49" />

- **Create a Redux Store:** Create a file named `src/store.js`
  ```
  import { configureStore } from '@reduxjs/toolkit'

  export default configureStore({
    reducer: {}
  })
  ```
- 



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
