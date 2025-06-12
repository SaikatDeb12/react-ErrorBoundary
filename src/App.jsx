import React from "react";
import "./App.css";

function App() {
  //this wrapping of multiple div, inside <></> is called react-fragments
  return (
    <>
      <div>header div</div>
      <div>
        <ErrorBoundary>
          <Card1 />
        </ErrorBoundary>
        <br />
        <Card2 />
      </div>
    </>
  );
}

function Card1() {
  //here in the line division line..
  //because of the error boundary, shows "Something went wrong" message
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "gray",
      }}
    >
      Hi there, division result is: {23 / a}
    </div>
  );
}

const Card2 = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "gray",
      }}
    >
      Hello
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("error caught: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default App;
