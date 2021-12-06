import { Input } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { ISearchProps } from './types';

export const Search: FunctionComponent<ISearchProps> = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div>
      <Input placeholder="Type forward..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Type forward..." value={author} onChange={(e) => setAuthor(e.target.value)} />

      <button onClick={() => onSearch(title, author)}>Search title</button>
      <p>
        Notice: Input should be in key:value format divided by space (&ldquo; &rdquo;)
        <br />
        Notice: If your input contains space replace it with undescore (&ldquo;_&rdquo;)
        <br />
        Example: title:Lord_of author:Alison
      </p>
    </div>
  );
};
