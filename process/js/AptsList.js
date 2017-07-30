var React = require("react");

var AptsList = React.createClass({
    handleDelete: function() {
        this.props.onDelete(this.props.whichItem);
    },
    render: function(){
        return (
            <li className="pet-item media">
                <div className="media-left">
                    <button className="pet-delete btn btn-xs btn-danger"
                        onClick={this.handleDelete}>
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </div>
                <div className="pet-head">
                    <span className="pet-name">{this.props.singleName.petName}</span>
                    <span className="app-date pull-right">{this.props.singleName.aptDate}</span>
                    <div className="owner-name">
                        <span className="label-item">Owner: <span>{this.props.singleName.ownerName}</span></span>
                    </div>
                    <div className="apt-notes">{this.props.singleName.aptNotes}</div>
                </div>
            </li>
        );
    }
});

module.exports = AptsList;
