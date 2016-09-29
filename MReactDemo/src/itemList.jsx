var React = require('react');
var TempItem =require('./tempList');

module.exports = React.createClass({

     render :function(){
         //console.log(this.props.item.weather);
         var listt=this.props.item.weather.map(function(item){
             //console.log(item)
            return <TempItem updateTemp={this.updateTemp} key={item.id} item={item}/>
            
        }.bind(this)) 
         
         
        return <div className="col-md-12">
            <div className="row">Last Updated: {this.props.item.dt_txt}</div>
            
            
            <div className="row padding-top30 city-text">
                <div className="col-md-3">
                    <div className="row">Temp: {this.props.item.main.temp}</div>
                    <div className="row">Temp_kf: {this.props.item.main.temp_kf}</div>   
                </div>
                <div className="col-md-3">  
                    <div className="row">Min: {this.props.item.main.temp_min}</div>
                    <div className="row">Max: {this.props.item.main.temp_max}</div>
                </div>
            
                <div className="col-md-3">  
                <div className="row">Pressure: {this.props.item.main.pressure}</div>
                    <div className="row">Humidity: {this.props.item.main.humidity}</div>
                </div>
                
            <div className="col-md-3">    
                <div className="row">Sea_level: {this.props.item.main.sea_level}</div>
                <div className="row">Grnd_level: {this.props.item.main.grnd_level}</div>
                </div>
            </div>
            <div className="row padding-top30"><h3><b>Five Days Forecast</b></h3></div>
            <div className="row item-text text-center">
             {listt}
            </div>
        </div>
            
        
      
     

    }

})


