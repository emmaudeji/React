# ReactJs Full Course

to create react app
`npx create-react-app <app name>`
or
`npm install create-react-app -g create-react-app <app name>`

syntax for class compoment

```
  import React, {component} from "react";

  class Welcome extend React.component  {
    render (props) {
      return <> Hello {this.props.name} </>
    }
  }

  export default Welcome;
```

## JSX

- JavaScrit XML (JSX)
- It's an extension of Js that enables you to write Js in XML
- It makes your code more readable and transpiles your code to Js
- It is the best practice of writing code in React
- Jsx automatically convers React.createElement() under the hood.
  So you can write fewer and simpler codes unlike what you get when writing
  JavaScript in html.
- Make reference to this `react on fire or modern react on fire` for pfoposed react updates.

## props

Quick notes on props:

##### component - greet.js

    ```
    import React, {component} from "react";

      const Greet = (props) => {
        return (
          <>
            <h1>Hello {props.name} a.k.a {props.nickName}</h1>
            {props.children}
          </>
        )
      }

      export default Greet;
    ```

##### app.js

    ```
    import React, {component} from "react";
    import Greet from ".component/greet";

      const App = () => {
        return (
          <>
            <Greet name = "Emma" nickName="gogrene">
              <p>You are a guru</p>
            <Greet/>
          </>
        )
      }

      export default App;
    ```

## Context

- Used to render a value acros a component tree without using props.
- Props are limited to one reference. But context makes it possible to
  render the value across multiple component in the same component tree.
- Use React.context() to get started
  Steps:
  - create the context
  - Provide the context value
  - Consume the context value.

## React HTTP

- use axios or fetchApi
- axios is a HTTP library
- Note that react has no business with APIS
- All react wants is your states and props.
- So fetch the API using HTTP library ans asign it to a state aor prop.

## Hooks

## useState Hooks

- lets you add state to function components
- in classes state is always an object, with usestate hooks states doens't have to be an object
- it returns array of 2 elements; state and setState.
- useState hooks always depend on the previous value. you can pass a setter function to update the prevState.
- remember to use spread operators when adding value to array states.

## useEffects Hooks

## useReducer

- a hook used for state management
- alternative to useState
- a primitive hook to useState
- useState is built from useReducer

## useContext

## useMemo

## useCallback

# React Rendering

# React TypeScript

### Why React + TypeScript

- Helps to check for bugs while typing the code instead of the browser at runtime using static type checking.
- Provides way to describe the shape of an Object, hence providing better documentation.
- Makes maitenance and refactoring large codebases easier.

To get started:
npx create-react-app react-typescript-demo --template typescript

# React render course

## Render on useState Hooks/useReducer

- performs the initial render
- if value of state is changed by setter function and the value is the same with the prious value, it discards the render
- if set value is the same with previous value after a re-render, it renders only once.
  i- if set value is different it commits new value.
