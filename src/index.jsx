import React from "react";
import { createRoot } from 'react-dom/client';


import App from './components/app/App';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript     
root.render(<App />);



// const App = () => {

//     const todoData =[
//         {label: 'Drind Coffe', important: false, id:1},
//         {label: 'Make Awesome App', important: true, id:2},
//         {label: 'Have a lunch', important: false, id:3},
//     ]
    
//     return (
//     <div>
//         <AppHeader />
//         <SerchPanel />
//         <TodoList todos={todoData} />
//     </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )

// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

