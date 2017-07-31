var React = require("react"),
    ReactDOM = require("react-dom"),
    AptsList = require("./AptsList"),
    AddAppointment = require("./AddAppointment"),
    _ = require("lodash");

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
            myAppointments: [],
            aptBodyVisible: false
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
    toggleAddDisplay: function() {
        var tempVisibilty = !this.state.aptBodyVisible;
        this.setState({
            aptBodyVisible: tempVisibilty
        });
    },
    addItem: function(tempItem) {
        var tempApts = this.state.myAppointments;
        tempApts.push(tempItem);
        this.setState({
            myAppointments: tempApts
        })
    },
    render: function() {
        var filterApts = this.state.myAppointments;
        filterApts = filterApts.map((item, index) => {
            return (
                <AptsList singleName={item}
                    key={index}
                    whichItem={item}
                    addApt={this.addItem}
                    onDelete={this.deleteMessage}
                    />
            );
        });

        return (
            <div className="interface">
            <AddAppointment
                bodyVisible={this.state.aptBodyVisible}
                handleToggle={this.toggleAddDisplay}/>
                <ul className="item-list media-list">
                    {filterApts}
                </ul>
            </div>//interface
        );
    } //render
}); //Main interface



ReactDOM.render(<MainInterface></MainInterface>, document.getElementById("petAppointmets"));
