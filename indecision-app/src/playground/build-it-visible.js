class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibilityButton: false,
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibilityButton: !prevState.visibilityButton
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibilityButton ? 'Hide Details' : "Show Details"}</button>
                {this.state.visibilityButton && (<div><p>This is some details</p></div>)}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));