import React from "react";
import { Players } from "./../api/players";

export default class AddPlayer extends React.Component {
    addPlayer (e) {
        let playerName = e.target.playerName.value;

        e.preventDefault();

        if (playerName) {
            e.target.playerName.value = '';

            //Insert Player
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    render () {
        return (
            <div className="item">
                <form className="form" onSubmit={this.addPlayer.bind(this)}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player Name" />
                    <input className="button" type="submit" value="Add Player" />
                </form>
            </div>             
        );
    }
}