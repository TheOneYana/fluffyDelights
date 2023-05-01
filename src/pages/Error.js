import kitty from '../images/Gold.png'

const Error = () => {
  return (
    <div className="error_container">
      <img className="error_img" src={kitty} alt='kawaii-cat'/>
      <h3 className="error_text">Sorry, this page does't exist.</h3>
    </div>
  )
}

export default Error;