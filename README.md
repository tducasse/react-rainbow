# React-rainbow

A simple React component that switches colors, using render props.

Ever wondered how to switch colors easily from a list of colors, or even randomly? This component is for you!

## Demo

A storybook demo is available at [tducasse.github.io/react-rainbow](https://tducasse.github.io/react-rainbow/).

## Installation

Since the component is published on the [npm registry](https://www.npmjs.com/package/react-rainbow), you can just run:

```
npm i react-rainbow
```

## Usage

The component uses render props, this means that it only takes care of the logic, and it's up to you to choose how you will display the result.

It takes the following properties:
| Property | Type | Usage |
| --- | --- | --- |
| colors | Optional. An array of strings. Each string must be a valid CSS color. Example: ['red', '#ffffff'] | If provided, the component will switch randomly between these colors. Otherwise, it will just generate a new valid color everytime you switch. |
| ordered | Optional. Boolean. Defaults to false. | If `true`, the component will follow the original array order when switching. |
| initial | Optional. String. Defaults to 'white'. Must be a valid CSS color. | Color that will be active the first time the component is rendered. |
| children | React component | This component will be given 2 props: the current active color, and a callback allowing you to switch the active color.

## Examples

All the examples are available at [tducasse.github.io/react-rainbow](https://tducasse.github.io/react-rainbow/) and in the `/docs` folder.

```javascript
const RainbowButton = props => (
  <Rainbow {...props}>
    {(color, onClick) => {
      return (
        <div style={{ textAlign: 'center', width: 250 }}>
          <div>{color}</div>
          <div
            style={{
              backgroundColor: color,
              width: 250,
              height: 250,
              textAlign: 'center'
            }}
          />
          <button onClick={onClick}>Click me!</button>
        </div>
      );
    }}
  </Rainbow>
);
```
