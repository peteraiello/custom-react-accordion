# Custom React Accordion

![accordion screenshot](https://wordpress.peteraiello.co.uk/wp-content/uploads/2021/02/Custom-React-Accordion.jpg)

# Demo

Demo available [here](https://peteraiello.github.io/custom-react-accordion/).

# Description

A minimal and accessible accordion app, created using [Create React App](https://create-react-app.dev/) to help me understand more about the ecosystem of React. 

# Get Started

- Clone the repo.
- `cd custom-react-accordion`
- run `npm install` to install the packages.
- `npm start` to run the dev server (`localhost:3000/custom-react-accordion`).

# App Brief

- The first item of the accordion should be active by default. 
- The markup and design patterns of the component should adhere to W3 accessibility standards as per their [documentation](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) (this includes keyboard input and the appropriate aria-controls).
- The content of the accordion should be compatible with JSON formatted data. 

# How it Works

**JSON structure**

- The content for each accordion item is designed to work using JSON data. 
- The JSON data includes an array of objects for each accordion item.
- The objects include values for the `title` and `description`.

```
[
  {
    "title": "Item 1",
    "description": "Lorem ipsum."
  },
  {
    "title": "Item 2",
    "description": "Lorem ipsum."
  }
]
```

**Design structure**

- The markup for the accordion begins by using the `AccordionWrapper` component. 
- The JSON data is iterated by using the `.map` JS function. 
- The values for `index`, `title` and `description` are passed into `AccordionItem` as props.

```jsx
<AccordionWrapper>
    {data.map((item, index) => (
        <AccordionItem key={index} index={index} title={item.title} description={item.description} />
    ))}
</AccordionWrapper>
```

**State management**

- The accordion uses [context](https://reactjs.org/docs/context.html) to manage the state globally.
- The context for the `active` state is created inside `AccordionWrapper`.
- The context for `active` also includes a function for updating the state (`setActive`).
- State is updated in the `AccordionItem` using `setActive` with the `onClick` function.
- The functionality is implemented by comparing the value of `index` with the value of `active` 

```jsx
className={ active === props.index  ? 'panel-open' : 'panel-close' }
```

# Accessibility

- Markup includes the appropriate aria attributes (`aria-expanded`, `aria-controls`, `aria-disabled`).
- Accordion is usable with keyboard only (`Tab` and `Shift+Tab` to switch and `Enter` to open tab). 
- Tested with the [WAVE accessibility tool](https://wave.webaim.org/extension/).

# Contact

Most responsive to email: [hello@peteraiello.dev](mailto:hello@peteraiello.dev).

### Thank you and good luck!
