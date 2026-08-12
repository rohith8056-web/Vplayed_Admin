# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admanagement.spec.js >> Functional Testing >> TC-01: Displays the login page heading
- Location: tests/admanagement.spec.js:14:3

# Error details

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

# Test source

```ts
  1  | import { Basepage } from "./basepage.js";
  2  | export class admanagement extends Basepage {
  3  | 
  4  |   constructor(page) 
  5  |   {
> 6  |     this.page = page;
     |     ^ ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  7  |     
  8  |   }
  9  | 
  10 |   
  11 | }
```