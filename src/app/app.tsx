import { useState } from 'react';
import Welcome from '../welcome/welcome';

function WelcomeForm() {
  const [name, setName] = useState('Guest');
  return (
    <>
      <p>
        <label>
          Who are you?
          <input
            name="name_input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </p>

      <Welcome
        dataTestId='welcome'
        name={name}
      />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bazel/React/Typescript Sample App
        </p>
      </header>

      <WelcomeForm />
    </div>
  );
}

export default App;
