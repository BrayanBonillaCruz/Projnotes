# Update to ES6

## Introduction
In the following work it is intended to achieve, through the knowledge acquired in the ES6 course, update the code from ES5 to ES6. As an objective, it is expected to know the new updates of ES6, to use them in our class activities. 

## Methods
To start, the new ES6 updates began to be identified, with this the variables began to be updated since in ES5 the variables were initialized with **Var** as it's shown in the following:

~~~
var debug = Debug('projnotes');

var port  = normaLizePort(process.env.PORT || '3000')
~~~

In ES6 there was a change of variables, these went from being **Var** to **Const** or **Let**, as it's shown in the following:

~~~
const debug = Debug('projnotes');

const port  = normaLizePort(process.env.PORT || '3000')
~~~

At the end of the initialization of variables, it began with the **Functions** for ES5, the structure of these can be seen below:

~~~
app.use(function(req, res, next){
    next(createError404());
});
~~~

In ES6 the functions are called **Arrow functions**, this change can be seen below:

~~~
app.use((req, res, next) => {
    next(createError404());
});
~~~

The require method allows you to **Import** files as shown below:

~~~
const createError = require('http-errors');
~~~

For ES6 this method is updated with the **Import method**, as shown below:

~~~
import createError from 'http-errors';
~~~

Below is the **Concatenation** in ES5:

~~~
console.error(bin + 'requires elevated privileges');
~~~

While in ES6 it is upgraded to **Interpolation**, as shown below:

~~~
console.error(`${bin} requires elevated privileges`);
~~~

Finally the **Export** is observed, below is its method in ES5:

~~~
module.exports = router;
~~~

In **ES6** the **Export** is updated as shown below:

~~~
export default router;
~~~

## Results
Finally, it was possible to convert from **ES5** to **ES6**, the changes that were made were **Interpolation, Import, Export, Arrow functions and Initialization of variables**. In the following link you can see the change to ES6 in the project.

## Discussions
A more modern code was obtained, which is **ES6**. In this new update, it is possible to reduce a quantity of code, making it more efficient. The changes added were **Interpolation, Import, Export, Arrow functions, and Initialization of variables**.
