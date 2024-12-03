import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { FluentProvider } from "@fluentui/react-components";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FluentProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  </FluentProvider>
);
