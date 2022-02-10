import React, { useState } from 'react';
import axios from 'axios';

export const PostForm = () => {
  const [data, setData] = useState({
    userId: '',
    title: '',
    body: '',
  });

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(data);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  // console.log(data);
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="userId"
          value={data.userId}
          onChange={inputHandler}
        />
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={inputHandler}
        />
        <input
          type="text"
          name="body"
          value={data.body}
          onChange={inputHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
