const {Component, mount} = owl;
// owl  version = '1.4.11';
const {xml} = owl.tags;
const {whenReady} = owl.utils;

// Owl Components
class App extends Component {
    // static template = xml`<div>Hello world</div>`;
}

App.template = xml`<div>Hello world!</div>`;

// Setup code
function setup() {
    mount(App, {target: document.body});
}

whenReady(setup);