import * as React from 'react';
import './style.css';

export default function App() {
  const [joke, setJoke] = React.useState('Click the button to get a joke...');
  return (
    <div>
      <h3>Chuck Norris Jokes from chucknorris.io</h3>
      <span>{joke}</span>
      <p>
        <form>
          <button
            onClick={(e) => {
              e.preventDefault();
              fetch('https://api.chucknorris.io/jokes/random')
                .then((response) => response.json())
                .then((json) => setJoke(json.value))
                .catch(console.error);
            }}
          >
            Get Joke
          </button>
        </form>
      </p>
    </div>
  );
}

