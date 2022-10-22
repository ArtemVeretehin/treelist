import React from "react";
import ReactDOM from 'react-dom/client';
import TreeList from "./TreeList";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TreeList />
    </React.StrictMode>
);

export default TreeList;
