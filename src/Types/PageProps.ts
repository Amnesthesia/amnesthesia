import Data from './Data';
import PageResources from './PageResources';
import PathContext from './PathContext';

interface IPageProps {
  data: Data;
  location: Location;
  pageResources?: PageResources;
  pathContext: PathContext;
}

export default IPageProps;
