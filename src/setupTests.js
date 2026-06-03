import "@testing-library/jest-dom";

// Required by React 18 tests so state updates from user interactions are tracked by act().
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
