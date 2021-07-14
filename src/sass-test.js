import SassTest from './components/sass-test/sass-test.js'; 
import Heading from './components/heading/heading.js';
import React from 'react';

const heading = new Heading();
heading.render('hello world');

const sassTest = new SassTest();
sassTest.render();

if (process.env.NODE_ENV === 'production') {
    console.log('production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('dev mode');
}

