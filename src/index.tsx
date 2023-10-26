import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './common.css';
import { App } from './components/App/App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
