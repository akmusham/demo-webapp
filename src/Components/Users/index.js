import React,{ useEffect } from "react"
import { connect ,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from "../../Redux/actions/UsersActions"
import Loading from "../../Utility/Loading/"

function Users(props) {
  const UsersObj = useSelector(state => state.UsersReducer)
  const getUsers = async() => {
    await props.fetchUsers()
  }
  useEffect(()=>{
    getUsers()
  },[])

  if (UsersObj) {
    return(
      <div>
        {
          UsersObj.isFetching? <Loading /> :
          UsersObj.users.map((each,i)=>{
            return(
              <div key={i}>
                {each.name}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: bindActionCreators(getUsers, dispatch)
});

export default connect(null,mapDispatchToProps)(Users);
