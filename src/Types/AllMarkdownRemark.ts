import Post from './Post';

interface IPageEdge {
  node: Post;
}
interface IAllMarkdownRemark {
  totalCount: number;
  edges: IPageEdge[];
}

export default IAllMarkdownRemark;
