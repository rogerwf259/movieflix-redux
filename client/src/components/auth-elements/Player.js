import React, { Component } from 'react';

class Player extends Component {
    render() {
        return (
            <div id="player">
                <video poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" controls>
                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" type="video/mp4"/>
            </video>
            </div>
        );
    }
}

export default Player;