# Custom React Accordion

![accordion screenshot](accordion-app.png)

# Description

A minimal and accessible accordion app, made using [Create React App](https://create-react-app.dev/) to help me understand more about developing UI with React. 

# Component Brief

- The first item of the accordion should be active by default. 
- The markup and design patterns of the component should adhere to W3 accessibility standards as per their [documentation](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) (this includes keyboard input and the appropriate aria controls).
- The app should work using JSON formatted data. 

# How it works

The accordion is designed to work with an array of JSON data. The objects in the array include the values `title` and `description`, which make up the content for each accordion item.  

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
```

The accordion is wrapped in the `AccordionWrapper` component and the JSON is iterated through using `.map`, passing in the `title` and `description` values to the `AccordionItem` component as props. 

```
<AccordionWrapper>
    {data.map((item, index) => (
        <AccordionItem key={index} index={index} title={item.title} description={item.description} />
    ))}
</AccordionWrapper>
```

`AccordionWrapper` uses [context](https://reactjs.org/docs/context.html) as a means of controlling the state globally, creating a state for `active` as well as a function of `setActive` for updating the state within nested components.

The state is updated via an `onClick` function within `AccordionItem`. The show and hide of the panel, as well as the various aria-controls, are implemented by conditional statements, that compare the current index integer to the active state: 

```
className={ active === props.index  ? 'panel-open' : 'panel-close' }
```


