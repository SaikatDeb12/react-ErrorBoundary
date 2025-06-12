import "./App.css";

function App() {
  return (
    <div>
      <Card1 />
      <br />
      <Card2 />
    </div>
  );
}

function Card1() {
  // throw new Error("something wrong"),
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "gray",
      }}
    >
      Hi there
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

export default App;
