const {Component, mount} = owl;
const { useState } = owl.hooks;
// owl  version = '1.4.11';
const {xml} = owl.tags;
const {whenReady} = owl.utils;

// Owl Components
class App extends Component {
    state = useState({ counterValue: 0 });
    alert_mss() {
        this.state.counterValue += 1;
    }
}

App.template = xml`
<div>Hello owl! 
<br />
<button t-on-click="alert_mss">Click me!</button>
<p>Counter value: <t t-raw="state.counterValue"/></p> 
</div>`;

// Setup code
function setup() {
    mount(App, {target: document.body});
}

whenReady(setup);