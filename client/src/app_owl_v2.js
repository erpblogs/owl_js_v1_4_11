const {Component, mount, xml} = owl;
// owl  version = '2.';

// Owl Components
class App extends Component {
}

App.template = xml`
    <div>Hello world</div>
`

mount(App, {target: document.body});
