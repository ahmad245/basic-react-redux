import React from 'react'
import { connect } from 'react-redux';
import {selectSong} from '../actions'

const SongList=(props)=>{
    const renderList=props.songs.map((song)=>{
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button onClick={()=>props.selectSong(song)} className="ui button primary">
                        Select
                    </button>
                </div>
                <div className="content">{song.title}</div>
            </div>
        )
    })
    return (
    <div className="ui divided list">
      {renderList}
    </div>)
}

const mapStatToProp=state=>{
    return {songs:state.songs}
}
export default connect(mapStatToProp,{selectSong})(SongList)