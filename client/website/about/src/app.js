const {Component, mount} = owl;
const { useState } = owl.hooks;
// owl  version = '1.4.11';
const {xml} = owl.tags;
const {whenReady} = owl.utils;

// Owl Components
class About extends Component {
    go_home() {
        location.replace("/")
    }
}

About.template = xml`
<div class="container pt-4">About Page! 
<br />
<button t-on-click="go_home">Goto Home!</button>
</div>`;

// Setup code
function setup() {
    mount(About, {target: document.body});
}

whenReady(setup);