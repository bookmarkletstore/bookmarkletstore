import React from 'react';

export default class SafeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch() {

    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ border: '1px dashed red', padding: '4rem', color: 'red' }}>
                    <h4>{this.props.msg || 'Failed to load component. Please see console for details.'}</h4>
                </div>
            );
        }

        return this.props.children;
    }
}