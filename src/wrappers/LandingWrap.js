import styled from 'styled-components';

const Wrapper = styled.div`
.top-logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.logo {
  max-width: 500px;
}
.bkg {
  height: 100%;
  width: 100vw;
  background-color: var(--background_taupe);
  font-family: "Alkatra";
  font-size: 30px;
  color: rgb(36, 20, 1);
}
.nav{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 25px;
  height: 90px;
  background-color: var(--background_taupe);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: inset 0px 0px 20px 0px rgba(135, 114, 89,6);
}
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content:center;
}
.main-img-container{
  min-width: 500px;
  height: auto;
  width: auto;
  background-color: var(--background_taupe);
}
.main-img {
  width:800px;
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
  min-width: 500px;
  height: 500px;
  background-color: var(--dark-beige);
  padding: 18px 10px 0px 14px;
}
p {
  text-indent: 20px;
  max-width: 900px;
}
.bs {
  color: rgb(74, 56, 39);
  text-decoration: underline;
  text-decoration-color: rgb(36, 20, 1);
}
h4:hover {
  color: var(--hover);
  cursor: pointer;
}
.paw{
  max-width: 70px;
  margin-left: 40%;
  margin-top: 15px;
}
.register{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-top: 20px;
  padding-bottom: 90px;
}
.pawicon{
  width: 25px;
  margin: -4px 5px 0 5px;
}
button{
  color: var(--hover);
  height: 50px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:var(--dark-beige);
  border: 2px solid var(--dark-beige);
  box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0,1);
  border-radius: 10px;
  margin-top: 15px;
  padding: 2px;
  cursor: pointer;
}
button:hover{
color: rgb(41, 28, 23);
}
footer{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  height: 50px;
  background-color: var(--background_taupe);
  box-shadow: inset 0px 0px 20px 0px rgba(135, 114, 89,6);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

@media(min-width: 1724px) {
.nav{
  padding: 0 30% 0 30%;
}
.container {
  flex-direction: row;

}
.main-img-container{
  max-width: 100%;
  min-width: 700px;
  height: auto;
  width: auto;
  width: 1294px;
  height: 650px;
  background-color: var(--background_taupe);
  }
.main-img {
  width:1290px;
  height: 650px;
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
  height: 650px;
  overflow: auto;
}
.paw{
  max-width: 90px;
  margin-left: 40%;
}
footer{
  height: 50px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  box-shadow: inset 0px 0px 20px 0px rgba(135, 114, 89,6);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
}

@media(min-width: 600px){
.logo {
  max-width: 600px;
}
}

@media(min-width: 699px) and (max-width:799px ){
.logo {
  max-width: 600px;
}
.info{
    height: auto;
}
.paw{
    margin-bottom: 15px;
}
}

@media (min-width: 800px) and (max-width: 868px){
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
.paw{
    margin-bottom: 15px;
}
.main-img{
    width: 100%;
}
}

@media (min-width: 869px) and (max-width:1004px){
  .container {
    flex-direction: row;
  }
  .info {
    font-size: 20px;
    min-width: 350px;
    padding: 18px 10px 0px 14px;
    overflow: scroll;
    align-items: center;
  }
  .paw{
    margin-top: -8px;
  }
  
}
@media (min-width: 1005px) and (max-width: 1723px){
  .container {
    flex-direction: row;
 
  }
  .info{
    font-size: 24px;
    align-items: center;
  }
  .paw{
    margin-top: -2px;
  }
}

`;

export default Wrapper;