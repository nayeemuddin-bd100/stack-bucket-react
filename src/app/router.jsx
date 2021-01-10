import { Redirect, Router } from "@reach/router";
import NotFound from '../pages/404/index.jsx';
// Custom Components
import BucketDetailPage from "../pages/bucket-detail";
import BucketPage from '../pages/buckets/index.jsx';
 

function AppRouter() {
    
    return (
      <Router>
        <BucketPage path="/" />
        <Redirect from='buckets' to="/" noThrow />
        <BucketDetailPage path="buckets/:bucketID" />
        <NotFound default />
      </Router>
    );
}


export default AppRouter