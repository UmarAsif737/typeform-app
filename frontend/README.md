# InnoButler Frontend

## Requirements

- Node version 16.15

## Getting Started

Install yarn if you don't have it installed already

```bash
npm install --global yarn
```

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Design Principles

We follow [Chakra UI principles](https://chakra-ui.com/guides/principles).

- Simplicity: Strive to keep the component API fairly simple and show real world scenarios of using the component.
- Composition: Break down components into smaller parts with minimal props to keep complexity low, and compose them together. This will ensure that the styles and functionality are flexible and extensible.
- Accessibility: When creating a component, keep accessibility top of mind. This includes keyboard navigation, focus management, color contrast, voice over, and the correct aria-\* attributes.
- Naming Props: We all know naming is the hardest thing in this industry. Generally, ensure a prop name is indicative of what it does. Boolean props should be named using auxiliary verbs such as does, has, is and should. For example, Button uses isDisabled, isLoading, etc.

## Libraries

### Chakra UI

- [Official Documentation](https://chakra-ui.com/guides/first-steps)
- [Template documentation](https://demos.creative-tim.com/docs-purity-ui-dashboard/): Official documentation for the Purity template
- [Chakra Showcase](https://chakra-ui.com/showcase): List of tools to support development with Chakra
- [Chakra Templates](https://chakra-templates.dev/): An open source collection of components
- [Choc UI](https://choc-ui.com/): Another collection of components built with Chakra
- [Chakra related projects collection](https://github.com/chakra-ui/awesome-chakra-ui)

### Icons

- [Icons collections](https://feathericons.com/)
- [React component](https://github.com/feathericons/react-feather)

### React Table

Our tables are rendered using Chakra UI together with React Table

- [Official Documentation](https://react-table.tanstack.com/docs/overview)
