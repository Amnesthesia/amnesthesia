import Frontmatter from './Frontmatter';

interface IPost {
  id: number;
  excerpt: string;
  html: string;
  frontmatter: Frontmatter;
  fields: {
    slug: string;
  };
  timeToRead: number;
}

export default IPost;
