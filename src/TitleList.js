import React, { Component } from 'react';

class TitleList extends React.Component {
    render() {
        return (
            <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>

        );
    }

}
export default TitleList;
