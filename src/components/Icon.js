import React from 'react'

export default class Font extends React.Component {

    render() {

        let classes = this.props.icon
        if (this.props.className) {
            classes += ' ' + this.props.className
        }

        return (
            <i className={ classes } aria-hidden="true" onClick={ this.props.onClick }/>
        )
    }
}