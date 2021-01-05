# CounterApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Overview

This is Basic App generated while learning the **Angular Framework**. While Developing this App i learned few Angular Terminologies like **Event Binding** and **Interpolation**.

**Event Binding:** Binding an Events like (click, mouseover etc) with the functionality on how to execute the event when its clicked.

```html
<button (click)="handleClick()">Current Count is: {{ count }} </button>

handleClick = () => {
    this.count = 0
  }
```

**Interpolation:** By using Interpolation we can implement Dynamically generated data into HTML Pages. To do that we use **{{ data }}**.

```html
crrentcustomer = "John"

<h1> Current Customer: {{ currentcustomer }} </h1>
```

## Features

- We can Increment Values using Increment Button
- We can Decrement Values using Decrement Button
- We can Reset Values using Reset Button


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


