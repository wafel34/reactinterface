var React = require("react"),
    ReactDOM = require("react-dom"),
    AptsList = require("./AptsList"),
    AddAppointment = require("./AddAppointment"),
    SearchAppointments = require("./searchAppointments"),
    _ = require("lodash");

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
            myAppointments: [],
            aptBodyVisible: false,
            orderBy: 'petName',
            orderDir: 'asc'
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
    reOrder: function(orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    },
    render: function() {
        var filterApts = this.state.myAppointments,
            orderBy = this.state.orderBy,
            orderDir = this.state.orderDir;

        filterApts = _.orderBy(filterApts, (item) =>{
            return item[orderBy].toLowerCase();
        }, orderDir);
        filterApts = filterApts.map((item, index) => {
            return (
                <AptsList singleName={item}
                    key={index}
                    whichItem={item}
                    onDelete={this.deleteMessage}
                    />
            );
        });

        return (
            <div className="interface">
            <AddAppointment
                bodyVisible={this.state.aptBodyVisible}
                handleToggle={this.toggleAddDisplay}
                addApt={this.addItem}/>
            <SearchAppointments
                orderBy = {this.state.orderBy}
                orderDir = {this.state.orderDir}
                onReOrder = {this.reOrder}/>
                <ul className="item-list media-list">
                    {filterApts}
                </ul>
            </div>//interface
        );
    } //render
}); //Main interface



ReactDOM.render(<MainInterface></MainInterface>, document.getElementById("petAppointmets"));
