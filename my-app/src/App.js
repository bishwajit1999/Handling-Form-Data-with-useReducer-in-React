import React, { useReducer } from "react";
import "./App.css";

// Initial state
const initialState = {
  email: "",
  password: "",
  submitted: false,
};

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "submit":
      return { ...state, submitted: true };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      dispatch({ type: "submit" });
    }
  };

  return (
    <div className="app">
      <h1>Login Form with useReducer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "email", payload: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
        />
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => dispatch({ type: "reset" })}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </form>

      <div className="output">
        {!state.submitted ? (
          <div>No details found</div>
        ) : (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
