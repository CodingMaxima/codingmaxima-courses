import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactMapData {

  readonly chapters = [
    
    {
      name: "Installation",
      lessons: [
        { name: "node and npm installation", url: "react/installation/node-npm-install" },
        { name: "creating react project", url: "react/installation/create-project" }

      ],
    },
    {
      name: "Real DOM & Virtual DOM",
      lessons: [
        { name: "Concepts , Advantages & Disadvantages", url: "react/real-dom-virtual-dom/concepts" }
      ],
    },
    {
      name: "JSX syntax(JS, HTML, CSS)",
      lessons: [
        { name: "Introduction to JSX", url: "react/jsx-syntax/introduction" },
        { name: "Rendering Elements into the DOM", url: "react/jsx-syntax/rendering-elements" },
      ],
    },
    {
      name: "State and Props",
      lessons: [
        { name: "State and props introduction and concepts ", url: "react/state-props/intro-concepts" },
        { name: "State management ", url: "react/state-props/state-managment" },
        { name: "props drilling ", url: "react/state-props/prop-drilling" }

      ],
    },
    {
      name: "Class Components",
      lessons: [
        { name: "Class Components ", url: "react/class-components/class" },
        { name: "Type Components ", url: "react/class-components/types" },
        { name: "Render Flow of components lifecycle ", url: "react/class-components/rendering-flow" },
      ],
    },

    {
      name: "Component Lifecycle Methods",
      lessons: [
        { name: "DidMount", url: "react/components-lifecycle/did-mount" },
        { name: "DidUpdate", url: "react/components-lifecycle/did-update" },
        { name: "WillUnmount", url: "react/components-lifecycle/will-unmount" },
        { name: "ShouldUpdate", url: "react/components-lifecycle/should-update" }
      ],
    },

    {
      name: "Refs,HOC,memoization",
      lessons: [
        { name: "Refs And DOMS", url: "react/refs-hoc-memoization/refs" },
        { name: "Higher order components concepts", url: "react/refs-hoc-memoization/higher-order-comp" },
        { name: "Memoization", url: "react/refs-hoc-memoization/memoization" },
        { name: "Conditional rendering", url: "react/refs-hoc-memoization/conditional-render" },
        { name: "Lists and keys", url: "react/refs-hoc-memoization/lists-keys" },
        { name: "Handling Events", url: "react/refs-hoc-memoization/handling-events" },
        { name: "Forms", url: "react/refs-hoc-memoization/forms" },
        { name: "Forwarding Refs", url: "react/refs-hoc-memoization/forward-refs" },
        { name: "Render Props and Fragments", url: "react/refs-hoc-memoization/render-props-fragments" },
        { name: "Optimizing performance and Code Splitting", url: "react/refs-hoc-memoization/optimizing-code-spliting" }

      ],
    },
    {
      name: "Functional components",
      lessons: [
        { name: "Introduction", url: "react/functional-components/introduction" },
        { name: "Rendering the DOM in Functional Components", url: "react/functional-components/rendering-dom" }
      ],
    },
    {
      name: "React Hooks",
      lessons: [
        { name: "Introduction to React Hooks", url: "react/react-hooks/introduction" },
        { name: "use", url: "react/react-hooks/use" },
        { name: "customHooks", url: "react/react-hooks/custom-hooks" },
        { name: "Handling States and props in react Hooks", url: "react/react-hooks/handlingstates-props" }
      ],
    },
    {
      name: "React Router",
      lessons: [
        { name: "Introduction to React router", url: "react/react-router/introduction" },
        { name: "Router", url: "react/react-router/router" },
        { name: "Router Components", url: "react/react-router/router-components" },
        { name: "Route", url: "react/react-router/route" },
        { name: "Components", url: "react/react-router/components" }
      ],
    },
    {
      name: "Axios",
      lessons: [
        { name: "Axios API Introduction", url: "react/axios/introduction" },
        { name: "All different methods of Axios", url: "react/axios/methods-axios" },
        { name: "Interceptors", url: "react/axios/interceptors" },
      ],
    },
    {
      name: "React Redux",
      lessons: [

        { name: " Redux introduction and Advantages", url: "react/react-redux/introduction" },
        { name: "Redux App Flow", url: "react/react-redux/appflow" },
        { name: "main 3 concepts of Redux", url: "react/react-redux/concepts" },
        { name: "Different components of Redux", url: "react/react-redux/components" },
      ],
    },
    {
      name: "Middleware(Redux-saga/redux-thunk)",
      lessons: [
        { name: "Middleware is used? ", url: "react/middleware/redux-saga" },
        { name: "Different types of redux Middleswares and advantages", url: "react/middleware/types-adv" },
        { name: "Introductions of redux saga and redux thunk", url: "react/middleware/use-middleware" }

      ],
    },
    {
      name: "CSR,SSR,SSG",
      lessons: [
        { name: "Different types of rendering the page/App", url: "react/csr-ssr-sgc/diff-types" },
        { name: "Client, Server side rendering & static site generation,", url: "react/csr-ssr-sgc/concepts" },
      ],
    },
    {
      name: "Performance techniquies",
      lessons: [
        { name: "Different techniques to improve performance", url: "react/performance-techniques/different-techniques" },
        { name: "Web vitals", url: "react/performance-techniques/web-vitals" },
      ],
    },
    {
      name: "API Reference",
      lessons: [

      ],
    },
    {
      name: "Test cases",
      lessons: [
        { name: "Introduction", url: "react/testcases/introduction" },
        { name: "Jest, Enjyme", url: "react/testcases/jest-enjyme" },
        { name: "React Testing Library", url: "react/testcases/testing-library" },
      ],
    },
    {
      name: "Webpack and babel",
      lessons: [
        { name: "Webpack and babel concepts", url: "react/webpack-bable/concepts" }
      ],
    },

  ];

}
