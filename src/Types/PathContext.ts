import Post from './Post';

interface IPathContext {
  tags?: string[];
  categories?: string[];
  categoryName: string;
  tagName?: string;
  posts?: Post[];
  next: any;
  prev: any;
}

export default IPathContext;
