var React = require("react"),
    ReactDOM = require("react-dom");

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
            title: "Appoitments",
            show: true
        };
    },
    render: function() {
        var displayOptions = {
            color: "red"
        };
        return (
            <div>
                <h1>{this.state.title}</h1>
                <ul style={displayOptions}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    } //render
}); //Main interface

ReactDOM.render(<MainInterface></MainInterface>, document.getElementById("petAppointmets"));
