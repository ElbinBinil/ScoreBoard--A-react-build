import React, { PureComponent } from 'react';

import Counter from './Counter'
import WinnerDisplay from './WinnerDisplay'

class Player extends PureComponent {
  render(){

    const {
      name,
      id,
      score,
      index,
      scoreChange,
      removePlayer
     } = this.props

    return (
      
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <WinnerDisplay isHighScore={this.props.isHighScore}/>
          { name }
        </span>
        
        <Counter
         score={score}
         index={index}
         scoreChange={scoreChange}
         />
      </div>
    );
  }
   
}
 
export default Player;  