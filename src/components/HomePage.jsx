import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div className='HomePage'>
        <h1>HomePage</h1>

        <Link to='/articles'>
        <button>Articles</button></Link>
      </div>
    );
};

export default HomePage