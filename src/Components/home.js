import React from "react";
import SearchInput from './SearchInput';
import ImageList from './ImageList';
import axios from 'axios';


class Home extends React.Component {

    constructor(props){
        super(props)

        this.state = {images: []}
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    
    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=29172219-8b9488b3415c923f96261a906&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({images:response.data.hits})
    }
    render(){
        return(
    <div className='ui container' style={{marginTop:'30px'}}>
    <SearchInput onSearchSubmit={this.onSearchSubmit}/>
    <mageList images={this.state.images}/>
    </div>

    )
    }
}

export default  Home;