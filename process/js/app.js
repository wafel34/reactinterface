var React = require("react"),
    ReactDOM = require("react-dom");

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
            data: [
                {
                    "petName": "Buffy",
                    "ownerName": "Hassum Harrod",
                    "aptDate": "2016-06-20 15:30",
                    "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
                },
                {
                    "petName": "Spot",
                    "ownerName": "Constance Smith",
                    "aptDate": "2016-06-24 08:30",
                    "aptNotes": "This German Shepherd is having some back pain"
                },
                {
                    "petName": "Goldie",
                    "ownerName": "Barot Bellingham",
                    "aptDate": "2016-06-22 15:50",
                    "aptNotes": "This Goldfish has some weird spots in the belly"
                },
                {
                    "petName": "Mitten",
                    "ownerName": "Hillary Goldwyn",
                    "aptDate": "2016-06-21 9:15",
                    "aptNotes": "Cat has excessive hairballs"
                }
            ]
        };
    },
    render: function() {
        var filterApts = this.state.data;
        filterApts = filterApts.map((item, index) => {
            return (
                <li className="pet-item media" key={index}>
                    <div className="pet-head">
                        <span className="pet-name">{this.state.data[index].petName}</span>
                        <span className="app-date pull-right">{this.state.data[index].aptDate}</span>
                        <div className="owner-name">
                            <span className="label-item">Owner: <span>{this.state.data[index].ownerName}</span></span>
                        </div>
                        <div className="apt-notes">{this.state.data[index].aptNotes}</div>
                    </div>
                </li>
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
