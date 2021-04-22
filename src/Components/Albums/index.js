import React,{ useEffect } from "react"
import { connect ,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAlbums } from "../../Redux/actions/AlbumsActions"
import Loading from "../../Utility/Loading/"

function Albums(props) {
  const AlbumsObj = useSelector(state => state.AlbumsReducer)
  const getAlbums = async() => {
    await props.fetchAlbums()
  }

  useEffect(()=>{
    getAlbums()
  },[])

  return(
    <div>
      {
        AlbumsObj.isFetching? <Loading /> :
        AlbumsObj.albums.map((each,i)=>{
          return(
            <div key={i}>
              {each.title}
            </div>
          )
        })
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    fetchAlbums: bindActionCreators(getAlbums, dispatch)
});

export default connect(null,mapDispatchToProps)(Albums);
