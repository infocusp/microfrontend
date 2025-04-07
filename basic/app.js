const createElement = React.createElement;

const Header = () =>
  createElement("div", { className: "header" }, 
    createElement("h1", null, "Micro-Frontend Base Application"), 
    createElement("p", null, "Hosting multiple independent React components")
  );

const MicroFrontends = () =>
  createElement("div", { className: "microfrontends" },
    createElement("div", { className: "module", id: "warrior-root" }),
    createElement("div", { className: "module", id: "gladiator-root" })
  );

const App = () => createElement("div", { className: "container" }, createElement(Header), createElement(MicroFrontends));

ReactDOM.render(createElement(App), document.getElementById("root"));

// Dynamically import the micro-frontends and render them
const renderMicroFrontend = (modulePath, elementId) => {
  import(modulePath).then(module => {
    const Component = module[Object.keys(module)[0]]; // Assumes default or named export
    ReactDOM.render(createElement(Component), document.getElementById(elementId));
  });
};

renderMicroFrontend('./Warrior/Warrior.js', 'warrior-root');
renderMicroFrontend('./Gladiator/Gladiator.js', 'gladiator-root');
