import { useSelector, useDispatch } from "react-redux";

const PageBtnContainer = () => {
const { numOfPages, page} = useSelector((store)=> store.allImgs)
  return (
    <div>PageBtnContainer</div>
  )
}

export default PageBtnContainer