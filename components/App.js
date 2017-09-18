import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from '../components/VideoDetail';
import '../src/bootstrap/css/bootstrap.min.css';
import '../src/style.css';
const API_KEY = 'AIzaSyDcbOSm9JLPYGc-O0W3f1n-n_xHF6muDnY';
import _ from 'lodash';



export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null,
            term:''
        };
        this.videoSearch('papa roach')


    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos)=> {
            this.setState({
                videos:videos,
                selectedVideo: videos[0],

            });
        });
    }
    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
        return(

        <div>
            <SearchBar onSearchTermChange = {videoSearch}/>
                <div className="row">
                    <VideoDetail video = {this.state.selectedVideo}/>
                    <VideoList
                    onVideoSelect = {(selectedVideo)=>this.setState({selectedVideo})}
                    videos = {this.state.videos}/>
                </div>
        </div>
            )
    }
}