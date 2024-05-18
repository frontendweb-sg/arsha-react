# What is context api?

# how to implement

- phase - 1
  create context

```js
import { createContext } from "react";

const AppContext = createContext();

// AppContext.Provider
// AppContext.Consumer
```

- phase 2
  create provider

```js
export default function AppProvider({ children }) {
  return <AppContext.Provider>{children}</AppContext.Provider>;
}
```

- phase 3.
  consuming the provider

- using Consumer
- using useContext()
