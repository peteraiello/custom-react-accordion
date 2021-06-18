# Custom React Accordion

![accordion screenshot](https://wordpress.peteraiello.co.uk/wp-content/uploads/2021/02/Custom-React-Accordion.jpg)

# Demo

Demo available [here](https://peteraiello.github.io/custom-react-accordion/).

# Updates

- Split the accordion into two smaller components (`AccordionWrapper` and `AccordionItem`).
- Added `title` and `description` props to pass in content.

# Description

A minimal and accessible accordion app, created using [Create React App](https://create-react-app.dev/) to help me understand more about the ecosystem of React. 

**Initial accordion brief**

- The first item of the accordion should be active by default. 
- The markup and design patterns of the component should adhere to W3 accessibility standards as per their [documentation](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) (this includes keyboard input and the appropriate aria-controls).
- The content of the accordion should be compatible with JSON formatted data. 

# How to use

The app isn't currently published as an NPM package. However, if you wished to use with a React based project (such as `create-react-app`), simply: 
- clone the repo into a `lib` directory.
- import the two components `AccordionItem` and `AccordionWrapper` from the app's `src` folder.
- import the default CSS, `Accordion.css` from the `src` folder.

**Using JSON (recommended)**

Format your accordion content as JSON data:

```json
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

Iterate through JSON and pass in the relevant values as props: 

```jsx
<AccordionWrapper>
    {data.map((item, index) => (
        <AccordionItem key={index} index={index} title={item.title} description={item.description} />
    ))}
</AccordionWrapper>
```

**Without JSON**

Same format as above, except for adding the props manually: 

 ```jsx
<AccordionWrapper>
    <AccordionItem index={0} title={"1"} description={"lorem ipsum"}></AccordionItem>
        <AccordionItem index={1} title={"item 2"} description={"lorem ipsum"}></AccordionItem>
        <AccordionItem index={2} title={"item 3"} description={"lorem ipsum"}></AccordionItem>
</AccordionWrapper>
```

# Props

| Prop        | Component        | Type        | Required           | Description                     | 
| ----------- | ---------------- | ----------- | ------------------ | ------------------------------- |
| Index       | `AccordionItem`  | Number      | :white_check_mark: | The index of the array.         |
| Title       | `AccordionItem`  | String      | :white_check_mark: | Title for each tab.             |
| Description | `AccordionItem`  | String      | :white_check_mark: | Text for the open panel.        |

# Accessibility

- Markup includes the appropriate aria attributes (`aria-expanded`, `aria-controls`, `aria-disabled`).
- Accordion is usable with keyboard only (`Tab` and `Shift+Tab` to switch and `Enter` to open tab). 
- Tested with the [WAVE accessibility tool](https://wave.webaim.org/extension/).

# Contact

Most responsive to email: [hello@peteraiello.dev](mailto:hello@peteraiello.dev).

### Thank you and good luck!
