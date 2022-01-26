import React, {useContext} from 'react';
import Image from '../components/Image';
import {Context} from '../Context'
import { getClass } from '../utils/utils';





function Photos() {


    const {allPhotos} = useContext(Context)

    // console.log('Context photos ', allPhotos);

    const imagenes = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />)

  return (
      <main className="photos">
        {imagenes}
      </main>
      
  );
}

export default Photos;
