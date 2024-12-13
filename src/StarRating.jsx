// import { range } from './utils';
import { range } from './util';

function StarRating({ rating }) {
  const starKeys = range(0, Math.max(0, rating || 0)).map(() => crypto.randomUUID());

 
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

    return (
      <div className="star-wrapper">
        {starKeys.map((key) => (
          <img
            key={key}
            alt="Gold star"
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        ))}
      </div>
    );
  }
  
  export default StarRating;