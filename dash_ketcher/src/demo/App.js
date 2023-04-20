/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashKetcher } from '../lib/';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            label: 'my-label'
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashKetcher
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
