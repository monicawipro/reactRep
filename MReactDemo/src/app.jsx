var React = require('react');
var ReactDOM = require('react-dom');
var WeatherForm =require('./weatherform');

var SayHello= React.createClass({
    render:function(){
       // console.log(options)
    	return <div className="mainApp-container">
        
            <WeatherForm items={options}/>
        </div>     
    }
});

var options= {
    "city":{"id":1851632,"name":"Shuzenji",
    "coord":{"lon":138.933334,"lat":34.966671},
    "country":"JP",
    "cod":"200",
    "message":0.0045,
    "cnt":38,
    "list":[
            {
                "dt":1406106000,
                "main":{
                    "temp":298.77,
                    "temp_min":298.77,
                    "temp_max":298.774,
                    "pressure":1005.93,
                    "sea_level":1018.18,
                    "grnd_level":1005.93,
                    "humidity":87,
                    "temp_kf":0.26

                },
                "weather":[{"day":"Mon","tem":"30","tem2":"35","id":804,"main":"Clouds","description":"overcast clouds","icon":'../img/cloudysunny.png'},
                           {"day":"Tue","tem":"20","tem2":"25","id":805,"main":"Rainy","description":"heavy precipitation","icon":'../img/heavyrainy.png'},
                           {"day":"Wed","tem":"35","tem2":"45","id":806,"main":"Sunny","description":"no clouds","icon":'../img/sunny.png'},
                           {"day":"Thu","tem":"10","tem2":"15","id":807,"main":"Thunderstrom","description":"thunder clouds","icon":'../img/thunder.png'},
                           {"day":"Fri","tem":"25","tem2":"30","id":808,"main":"Clouds","description":"partial clouds","icon":'../img/partlysunny.png'}
                          
                          
                          ],
                "clouds":{"all":88},
                "wind":{"speed":5.71,"deg":229.501},
                "sys":{"pod":"d"},
                "dt_txt":"2014-07-23 09:00:00"
            }
        
        
            
            ]}
    };


    



var element = React.createElement(SayHello, {});
ReactDOM.render(element, document.querySelector('.container'));
