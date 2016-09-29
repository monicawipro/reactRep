var React = require('react');
var ListItem =require('./itemList');

module.exports= React.createClass({
        
     render:function(){
    
       var list=this.props.items.city.list.map(function(item){
             //console.log(item)
            return <ListItem updateItem={this.updateItem} key={item.dt} item={item}/>
            
        }.bind(this))  
       
        //console.log(this.props.items)
        
    return <div className="row weatherform">
        <div className= "col-md-2">
            <div className="row">
            <img className="images" src={'../img/imagetop.png'}></img></div>
            <div className="row">
                <h2>{this.props.items.city.name}, {this.props.items.city.country}</h2>
                <h4>({this.props.items.city.coord.lon},{this.props.items.city.coord.lat})</h4>  
            </div>   
        </div>
        <div className="col-md-10">
           <div className="row"> 
               <h3><b>{this.props.items.city.name} City Weather</b></h3>  
            </div>
            <div className="row">{list}</div>
        </div>
    </div>
    }
}); 