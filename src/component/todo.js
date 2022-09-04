function ToDo(props){
    return (
    <div className='card'>
        <h2>{props.text}</h2>
        <div className="action">
          <button className="delete-btn">DELETE</button>
        </div>
    </div>
    );
}
export default ToDo;