import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    min-width: 370px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .main-img-container {
    min-width: 370px;
    height: auto;
    background-color: var(--background_taupe);
  }
  .main-img {
    width: 800px;
    height: 500px;
    max-width: 100%;
    display: block;
    object-fit: cover;
    object-position: 37% 25%;
  }
  .info {
    font-size: 22.2px;
    display: flex;
    justify-content: center;
    min-width: 370px;
    height: auto;
    background-color: var(--dark-beige);
    padding: 18px 10px 0px 14px;
  }
  p {
    text-indent: 20px;
    max-width: 900px;
  }
  .bs, button {
    color: tan;
    text-decoration: none;
    text-decoration-color: rgb(36, 20, 1);
  }
  .h4:link {
    color: var(--font);
  }
  .h4:visited {
  color: var(--font);
  }
  .h4:active {
  color: var(--font);
  }
  .h4:hover {
    color: var(--hover);
    cursor: pointer;
  }
  .paw {
    max-width: 70px;
    margin-left: 40%;
    margin-top: 15px;
  }
  .register {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-top: 20px;
    text-align: center;
  }

  .pawicon {
    width: 25px;
    margin: -4px 5px 0 5px;
  }

  button {
  align-items: center;
  appearance: none;
  background-color: var(--dark-beige);
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#907e65 0 -3px 0 inset;
  box-sizing: border-box;
  color:var (--font);
  cursor: pointer;
  display: inline-flex;
  height: 50px;
  width: 240px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 22px;
  margin: 20px 0 20px 0;
  color: var(--hover);
}

button:focus {
  box-shadow: #3c301b 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
}

button:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
  transform: translateY(-2px);
  color: rgb(41, 28, 23);
}

button:active {
  box-shadow: #907e65 0 3px 7px inset;
  transform: translateY(2px);
}
.button:link{
    text-decoration: none;
  }
  /* button {
    color: var(--hover);
    height: 50px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-beige);
    border: 2px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    margin-top: 15px;
    padding: 2px;
    cursor: pointer;
    text-decoration-color: var(--font);
  }
  button:hover {
    color: rgb(41, 28, 23);
  }
  .button:link{
    text-decoration: none;
  } */
  .carousel {
  margin: 15px 0 70px 19px;
  height: 200px;
  }

  .carousel-image {
    border-radius: 40px;
    width: 180px;
    height:200px;
    object-fit: cover;
}

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 15px;
    height: 50px;
    background-color: var(--background_taupe);
    box-shadow: inset 0px 0px 20px 0px rgba(135, 114, 89, 6);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
@media (min-width: 480px) and (max-width: 599px) {
  .info {
      height: auto;
      align-items: center;
    }
    .carousel-image {
    width: 220px;
}
}
  @media (min-width: 600px) and (max-width: 699px) {
    .logo {
      max-width: 600px;
    }
    .info {
      height: auto;
      align-items: center;
    }
    .paw {
      margin-bottom: 15px;
    }

  .carousel-image {
    width: 250px;
}
    .carousel{

      margin: 15px 0 70px 55px;
  
    }
  }

  @media (min-width: 699px) and (max-width: 799px) {
    .logo {
      max-width: 600px;
    }
    .info {
      height: auto;
      align-items: center;
    }
    .paw {
      margin-bottom: 15px;
    }
    .carousel{
      margin: 15px 0 70px 90px;
    }
    .carousel-image {
    width: 250px;
}
   
  }

  @media (min-width: 800px) and (max-width: 868px) {
    .container {
      flex-direction: column;
     
    }
    .info {
      font-size: 19px;
      min-width: 350px;
      padding: 18px 10px 0px 14px;
      overflow: scroll;
      align-items: center;
      height: auto;
    }
    .paw {
      margin-bottom: 15px;
    }
    .main-img {
      width: 100%;
    }
    .carousel{
      margin: 15px 0 70px 10px;
    }
    .carousel-image {
    width: 250px;
}
   
  }

  @media (min-width: 869px) and (max-width: 1004px) {
    .container {
      flex-direction: row;
    }
    .info {
      font-size: 20px;
      width: 800px;
      padding: 18px 10px 0px 14px;
      overflow: scroll;
      align-items: center;
      height: 500px;
    }
    .paw {
      margin-top: -8px;
    }
    .carousel {
      margin: 15px 0 70px 30px;
  height: 270px;
  }

  .carousel-image {
    border-radius: 40px;
    width: 250px;
    height:270px;
    object-fit: cover;
}
  }
  @media (min-width: 1005px) and (max-width: 1723px) {
    .container {
      flex-direction: row;
    }
    .info {
      font-size: 24px;
      align-items: center;
      height: 500px;
      width:800px
    }
    .paw {
      margin-top: -2px;
    }
    .carousel {
      margin: 15px 0 70px 10px;
  height: 270px;
  }

  .carousel-image {
    border-radius: 40px;
    width: 250px;
    height:270px;
    object-fit: cover;
}
  }
  @media (min-width: 1190px) and (max-width: 1350px){
    .carousel{
      margin: 15px 0 70px 55px;
    }
    .info{
      height: 500px;
    }
  }
  @media (min-width: 1351px) and (max-width: 1600px){
    .carousel{
      margin: 15px 0 70px 50px;
    }
    .info{
      height: 500px;
    }
  }
  @media (min-width: 1601px) and (max-width: 1723px){
    .carousel{
      margin: 15px 0 70px 60px;
    }
    .info{
     height: 500px;
    }
  }
  @media (min-width: 1724px) {

    .container {
      flex-direction: row;
    }
    .main-img-container {
      max-width: 100%;
      min-width: 700px;
      height: auto;
      width: 1294px;
      height: 580px;
      background-color: var(--background_taupe);
    }
    .main-img {
      width: 1290px;
      height: 580px;
      max-width: 100%;
      display: block;
      object-fit: cover;
      object-position: 75% 25%;
    }
    .info {
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1294px;
      height: 580px;
      overflow: auto;

    }
    .paw {
      max-width: 90px;
      margin-left: 40%;
    }
    .carousel{
      margin: 15px 0 70px 70px;
    }
    .carousel-image {
    width: 250px;
}
    footer {
      height: 50px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      font-size: 20px;
      box-shadow: inset 0px 0px 20px 0px rgba(135, 114, 89, 6);
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
`;

export default Wrapper;
