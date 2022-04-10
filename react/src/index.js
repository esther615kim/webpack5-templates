require('file-loader?name=[name].[ext]!./index.html') // load index.html into webpack
import React from 'react';
import { createRoot } from "react-dom/client";

import App from './App';

// const appElement = document.getElementById("app");
const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(
    <App />
);
