# Custom React Accordion

![Custom-React-Accordion](https://user-images.githubusercontent.com/11468352/122650120-056fa800-d129-11eb-9caf-e1095a06478a.jpeg)

# Demo

Demo available [here](https://peteraiello.github.io/custom-react-accordion/).

NPM Package [here](https://www.npmjs.com/package/custom-react-accordion).

# Description

A minimal and accessible accordion app, created using [Create React App](https://create-react-app.dev/) to help me understand more about the ecosystem of React. 

# Install 

```bash
npm install --save custom-react-accordion
```

# Usage

**With JSON (recommended)**

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
    <AccordionItem index={0} title={"Item 1"} description={"Lorem ipsum."}></AccordionItem>
        <AccordionItem index={1} title={"Item 2"} description={"Lorem ipsum."}></AccordionItem>
        <AccordionItem index={2} title={"Item 3"} description={"Lorem ipsum."}></AccordionItem>
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

### Thank you and good luck!
