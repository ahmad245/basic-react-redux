import React from 'react'
import { connect } from 'react-redux'

const SongDetail=(props)=>{
   if(!props.song) return <div>select song</div>
    return (
        <div>
            {props.song.title}
        </div>
    )
}

const mapStateToProps=state=>{
    return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail) 