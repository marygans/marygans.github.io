import React, { Component } from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation" className="Navigation">
                <nav>
                    <ul>
                        <li>List your Property</li>
                        <li>Browse Properties</li>
                        <li>Top picks</li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Navigation;