# Custom React Accordion

![accordion screenshot](accordion-app.png)

# Description

A minimal and accessible accordion app, created using [Create React App](https://create-react-app.dev/) for the purpose of helping me understand more about the infrastructure of React. 

# Get Started Quickly

- Clone the repo
- `cd custom-react-accordion`
- run `npm install` to install the packages
- `npm start` to run dev server, i.e. `localhost:3000/custom-react-accordion`

# Component Brief

- The first item of the accordion should be active by default. 
- The markup and design patterns of the component should adhere to W3 accessibility standards as per their [documentation](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) (this includes keyboard input and the appropriate aria controls).
- The content of the accordion should be compatible with JSON formatted data. 

# How it Works

The accordion is designed to work with an array of JSON. The objects in the array include the values of `title` and `description`, which make up the content for each accordion item.  

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

The JSON date is wrapped in the `AccordionWrapper` component and iterated through using `.map`, passing in the array index, as well as the `title` and `description` values to the `AccordionItem` as props. 

```
<AccordionWrapper>
    {data.map((item, index) => (
        <AccordionItem key={index} index={index} title={item.title} description={item.description} />
    ))}
</AccordionWrapper>
```

The state for `active` is created globally in the `AccordionWrapper` using [context](https://reactjs.org/docs/context.html), which makes state accessible in nested components (i.e. `AccordionItem`).

The state for active is updated via an `onClick` function and the majority of the functionality is implemented by comparing the integer for the active state with the item index.

```
className={ active === props.index  ? 'panel-open' : 'panel-close' }
```
