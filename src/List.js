import React from "react";
// import Add from "./Add"
// import classes from "./App.module.css";
const List = (props) => {
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: "",
  // });

  // const submitUpdate = (value) => {
  //   props.updateTodo(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: "",
  //   });
  // };

  return (
    <div>
      <ul>
        {props.newList.map((newlist, index) => (
          <li key={index}>
            {newlist.title}
            {newlist.description}
            {/* {newlist.id === edit.id ? (
              <Add edit={edit} onSubmit={submitUpdate} />
            ) : (
              <>
                <button
                  onClick={() =>
                    setEdit({ id: newlist.id, value: newlist.text })
                  }
                >
                  edit
                </button>
              </>
            )} */}

            <button onClick={props.onRemove.bind(this, newlist.id)}>
              Delete
            </button>

            <button onClick={props.items.bind(this, newlist.id)}> List </button>
            {/* <button onClick={props.onListRemove.bind(this, newlist.id)}>
              DELETE List
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
