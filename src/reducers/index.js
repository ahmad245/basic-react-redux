import {combineReducers} from 'redux';
const songList=()=>{
    return [
        {title:"first song",duration:'14:01'},
        {title:"second song",duration:'15:01'},
        {title:"third song",duration:'16:01'}
    ]
}

const selectedSong=(selected=null,action)=>{

    if(action.type==='SELECTED_SONG') return action.payload
    return selected
}


export default combineReducers({
    songs:songList,
    selectedSong:selectedSong
})

