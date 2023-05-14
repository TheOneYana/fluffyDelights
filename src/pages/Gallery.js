import {onNavigateNext, onNavigatePrev, onChangeImgsPage,onCLickCurrentPage, fetchCats} from '../features/pagination/galleryPaginationSlice';
import {useDispatch, useSelector} from 'react-redux';
import CrudItem from '../components/CrudItem';
import CrudWrap from '../wrappers/CrudWrap';
import paw2 from '../images/paw2.png';
import {useState, useEffect} from 'react';
import Loading from "../components/Loading";
import {Helmet} from 'react-helmet-async';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  }, 3000)
  }, []);
  const dispatch = useDispatch();
  const {imgs,imgsPerPage, currentPage,total} = useSelector((store) => store.imgs);

  if(total< 1){
    return (
      <CrudWrap>
      <Helmet>
        <title>British Shorthair cattery in Los Angeles, California</title>
        <meta name = 'description' content = 'Images of british shorthair cats and british shorthair kittens from our cattery. Tabby british shorthair, lilact british shorthair, grey british shorthair, chocolate british shorthair, cream british shorthair'/>
        <link rel='canonical' href='/Gallery'/>
      </Helmet>
      <section className='cats'>
        <p>Let's call the cats!</p>
       <button className='callCats' onClick={()=> dispatch(fetchCats())}>Psspsspss</button>
       <img className='paw' src={paw2}/>
      </section>
      </CrudWrap>
    )
  }
  //number of total images divided by the number of items per page(28/8 = 3.5(4))
  const totalPages = Math.ceil(imgs.length / imgsPerPage);
  //create new array containing page numbers+1[1,2,3] instead of [0,1,2] so page number start from 1
  const pages = [...Array(totalPages+1).keys()].slice(1);
  // page 1: images from 1 to 8(1*8), page 2: images from 9 to 16(2*8) etc.
  const indexOfLastImg = currentPage * imgsPerPage;
  //8-8=0, 16-8 = 9 (index of firs image on a following page)
  const indexOfFirstImg = indexOfLastImg-imgsPerPage;

  //take images from 0 to 8 from imgs array 
  const visibleImgs = imgs.slice(indexOfFirstImg, indexOfLastImg);
  const navigatePrev = () => {
    if (currentPage !== 1) {dispatch(onNavigatePrev())}
  }
  const navigateNext = () => {
    if (currentPage !== totalPages) {dispatch(onNavigateNext())}
  }
  const handleCurrentPage = (p) => {
    dispatch(onCLickCurrentPage(p));
  }

//after sending all cats home from a one page, go back one page to stay on current page count.
if(currentPage>totalPages){
  dispatch(onNavigatePrev());
}

  return (<CrudWrap>
       {loading ? (<Loading/>):(
    <section>
    <section className='pagination'>
    <p><button className='nextPrevBtn' onClick={navigatePrev}>Prev</button>
        {pages.map((p)=> (<span className={p === currentPage ? 'active':'nextPrevBtn'} key={p} onClick={()=> handleCurrentPage(p)}>{p}</span>))}<button className='nextPrevBtn' onClick={navigateNext}>Next</button>
      </p>
      </section>
      <div className='kittensCrud'>
        
        {visibleImgs.map((cat)=> {
          return <CrudItem key={cat.id} {...cat}/>
        })}
      </div>
      
    </section>
       )}
    </CrudWrap>)
}

export default Gallery;

// type='button' onClick={dispatch(onNavigateNext())}
//onClick={dispatch(onNavigatePrev())}
