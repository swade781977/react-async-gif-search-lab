import React, { Component } from 'react';
import GifList from '../components/GifLIst'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: [],
    }



    handleFetch = (query = "coding") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=7p0rQkHzXuWdsx8negXaCyDp2Tp1rPKT`)
        .then(resp => resp.json)
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => ({url: gif.images.original.url}))
            })
        })
    }

    render(){
        return(
            <div >
                <GifSearch fetchGIFs = {this.handleFetch} />
                <GifList gifs = {this.state.gifs} />
            </div>
        )
    }

    componentDidMount(){
        this.handleFetch()
    }
}

export default GifListContainer;