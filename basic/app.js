const App = () => {
  return React.createElement(
      'div',
      { className: 'container' },
      React.createElement('div', { className: 'header' },
          React.createElement('h1', null, 'Micro-Frontend Base Application'),
          React.createElement('p', null, 'Hosting multiple independent React components')
      ),
      React.createElement('div', { className: 'microfrontends' },
          React.createElement('div', { className: 'module', id: 'warrior-root'}),
          React.createElement('div', { className: 'module', id: 'gladiator-root'})
      )
  );
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));

// Dynamically import the micro-frontends (Gladiator and Warrior) and render them in their respective divs
import('./Warrior/Warrior.js').then(module => {
  const Warrior = module.Warrior;
  ReactDOM.render(React.createElement(Warrior), document.getElementById('warrior-root'));
});

import('./Gladiator/Gladiator.js').then(module => {
  const Gladiator = module.Gladiator;
  ReactDOM.render(React.createElement(Gladiator), document.getElementById('gladiator-root'));
});