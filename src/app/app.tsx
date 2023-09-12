import Welcome from '../welcome/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bazel/React/Typescript Sample App
        </p>

        <Welcome name="Guest"/>
      </header>
    </div>
  );
}

export default App;
