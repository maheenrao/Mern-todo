import React from "react";

import { useForm, useFieldArray } from "react-hook-form";
import "./App.css";

const authorization = "f2bc0c85-b373-468a-9fd3-d1a2f2782609";
function Form(props) {
  const { register, handleSubmit, control } = useForm();

  const { fields, append } = useFieldArray({
    name: "items",
    control,
  });
  const onSubmit = (data) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: authorization,
      },
    }).then(() => {
      fetch("http://localhost:3000/todos", {
        headers: {
          contentType: "application/json",
          Authorization: authorization,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          props.addtitles(result.data);
          console.log(result.data);
        });
    });
    console.log(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="App">
        <label>Titles</label>
        <input placeholder="Title" {...register("title")} />
        <label>Items</label>
        {fields.map((field, i) => (
          <input key={field.id} {...register(`items.${i}`)} />
        ))}
        <button type="button" onClick={() => append([""])}>
          {" "}
          Add Items
        </button>

        <input type="submit" />
      </div>
    </form>
  );
}

export default Form;
