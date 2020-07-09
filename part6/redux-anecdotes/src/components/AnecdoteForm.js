import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddAnecdote = async (e) => {
    e.preventDefault();
    const newAnecdote = await anecdoteService.createAnecdote(inputValue);
    dispatch(addAnecdote(newAnecdote));
    setInputValue("");
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleAddAnecdote}>
        <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
