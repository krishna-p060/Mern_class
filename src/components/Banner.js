import React from 'react';
import {Carousel} from 'nuka-carousel';


function Banner() {
    return (
        <Carousel>
          <img src="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif" alt="Slide 1" />
          <img src="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif" alt="Slide 2" />
          <img src="https://unsplash.com/photos/a-red-squirrel-climbing-up-a-tree-trunk-KkKXqh_gtZc" alt="Slide 3" />
        </Carousel>
      );
}

export default Banner;