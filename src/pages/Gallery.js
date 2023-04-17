import {onNavigateNext, onNavigatePrev, onChangeImgsPage,onCLickCurrentPage, fetchCats} from '../features/pagination/galleryPaginationSlice';
import {useDispatch, useSelector} from 'react-redux';
import CrudItem from '../components/CrudItem';
import CrudWrap from '../wrappers/CrudWrap';
import paw2 from '../images/paw2.png';

const Gallery = () => {
  const dispatch = useDispatch();
  const {imgs,imgsPerPage, currentPage,total} = useSelector((store) => store.imgs);

  if(total< 1){
    return (
      <CrudWrap>
      <section className='cats'>
        <p>Let's call the cats!</p>
       <button className='callCats' onClick={()=> dispatch(fetchCats())}>Psspsspss</button>
       <img className='paw' src={paw2}/>
      </section>
      </CrudWrap>
    )
  }
  const totalPages = Math.ceil(imgs.length / imgsPerPage);
  const pages = [...Array(totalPages+1).keys()].slice(1);
  const indexOfLastPage = currentPage * imgsPerPage;
  const indexOfFirstPage = indexOfLastPage-imgsPerPage;

  const visibleImgs = imgs.slice(indexOfFirstPage, indexOfLastPage);
  const navigatePrev = () => {
    if (currentPage !== 1) {dispatch(onNavigatePrev())}
  }
  const navigateNext = () => {
    if (currentPage !== totalPages) {dispatch(onNavigateNext())}
  }
  const handleCurrentPage = (_p) => {
    dispatch(onCLickCurrentPage(_p));
  }
  return (<CrudWrap>
    <section>
    <section className='pagination'>
    <p><button className='nextPrevBtn' onClick={navigatePrev}>Prev</button>
        {pages.map((_p)=> (<span className='nextPrevBtn'  key={_p} onClick={()=> handleCurrentPage(_p)}>{_p}</span>))}<button className='nextPrevBtn' onClick={navigateNext} >Next</button>
      </p>
      </section>
      <div className='kittensCrud'>
        {visibleImgs.map((cat)=> {
          return <CrudItem key={cat.id} {...cat}/>
        })}
      </div>
      
    </section>
    </CrudWrap>)
}

export default Gallery

// type='button' onClick={dispatch(onNavigateNext())}
//onClick={dispatch(onNavigatePrev())}
