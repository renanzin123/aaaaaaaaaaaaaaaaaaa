
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';


import React, { useEffect, useState } from 'react';


const RepositoryList = ({ username }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repositories = response.data;
        setRepositories(repositories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, [username]);

  return (
    <div>
      <h2>Meus Repositórios do GitHub</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div>
      <h1>Meu Portfólio</h1>
      <RepositoryList username="renanzin123" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);





initScrollReveal(targetElements, defaultProps);
initTiltEffect();











