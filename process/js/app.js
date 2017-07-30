var React = require("react"),
    ReactDOM = require("react-dom"),
    AptsList = require("./AptsList"),
    _ = require("lodash");

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
            myAppointments: []
        };
    },
    componentDidMount: function() {
        this.serverRequest = $.get("./js/data.json", (result) => {
            var tempApts =  result;
            this.setState({
                myAppointments: tempApts
            });
        });
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    deleteMessage: function(item) {
        var allApts = this.state.myAppointments,
            newApts = _.without(allApts, item);
        this.setState({
            myAppointments: newApts
        });
    },
    render: function() {
        var filterApts = this.state.myAppointments;
        filterApts = filterApts.map((item, index) => {
            return (
                <AptsList singleName={item}
                    key={index}
                    whichItem={item}
                    onDelete={this.deleteMessage}/>
            );
        });
        return (
            <div className="interface">
                <ul className="item-list media-list">
                    {filterApts}
                </ul>
            </div>//interface
        );
    } //render
}); //Main interface



ReactDOM.render(<MainInterface></MainInterface>, document.getElementById("petAppointmets"));
