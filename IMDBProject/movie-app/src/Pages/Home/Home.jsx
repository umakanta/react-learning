import Banner from "../../Components/Banner";
import Movies from "../../Components/Movies";


function Home(props) {
    const {addToWatchLiist, removeFromWatchList, watchList} = props
    return <div>
        <Banner/>
        <Movies watchList={watchList} addToWatchLiist={addToWatchLiist} removeFromWatchList={removeFromWatchList}/>
    </div>
}

export default Home;