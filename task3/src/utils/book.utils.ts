import { IBook } from '../app/resource/book/book.types';

export const createBookCoverPath = (coverI: IBook['coverI']) =>
  `${process.env.REACT_APP_IMAGE_PATH || ''}/${coverI}-M.jpg`;

export const createId = (key: IBook['key']) => {
  const [, part1, part2] = key.split('/');
  return `${part1}-${part2}`;
};

export const createKey = (id: IBook['id']) => id.replaceAll('-', '/');
