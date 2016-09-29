var React = require('react');

module.exports = React.createClass({
    
     render :function(){
         //console.log(this.props.items); 
        return <div className="col-md-2">
            <div className="row">{this.props.item.day}</div>
       <div className="row"><img src={this.props.item.icon}></img></div>
            <div className="row padding-top20">{this.props.item.main}</div>
            <div className="row">{this.props.item.description}</div>
            <div className="row">{this.props.item.tem} - {this.props.item.tem2} °C|°F</div>
    
        </div>
    }
})


