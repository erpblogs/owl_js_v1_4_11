const {Component, mount} = owl;
const { useState } = owl.hooks;
// owl  version = '1.4.11';
const {xml} = owl.tags;
const {whenReady} = owl.utils;

// Owl Components
class NotFound extends Component {
    go_home() {
        location.replace("/")
    }
}

NotFound.template = xml`
<div>Page not found! 
<br />
<button t-on-click="go_home">Click here to go Home Page!</button>
</div>`;

// Setup code
function setup() {
    mount(NotFound, {target: document.body});
}

whenReady(setup);