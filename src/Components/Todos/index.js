import React,{ useEffect } from "react"
import { connect ,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from "../../Redux/actions/TodosActions"
import Loading from "../../Utility/Loading/"

function Todos(props) {
  const TodosObj = useSelector(state => state.TodosReducer)
  const getTodo = async() => {
    await props.fetchTodos()
  }
  useEffect(()=>{
    getTodo()
  },[])

  return(
    <ul>
      {
        TodosObj.isFetching? <Loading /> :
        TodosObj.todos.map((each,i)=>{
          return(
            <li key={i}>
              {each.title}
            </li>
          )
        })
      }
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: bindActionCreators(getTodos, dispatch)
});

export default connect(null,mapDispatchToProps)(Todos);
