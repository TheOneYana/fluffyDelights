import styled from "styled-components";

const CrudWrap = styled.div`

.cats {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px 0 0 0;
  background-color:  rgb(186, 161, 132);
  height: 500px;
}
.paw {
  max-width: 150px;
  margin-top: 40px;
}
/* .callCats{
  color: var(--font);
    height: 50px;
    width: 190px;
    background-color: var(--dark-beige);
    border: 1px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    margin: 45px 0 45px 0;
    padding: 2px;
    cursor: pointer;
    text-decoration-color: var(--font);
    
} */
.kittenImg{
  width: 170px;
  min-height: 250px;
  object-fit: cover;
  margin: 10px 0 10px 0;
}
.kittensCrud{
  font-size: 16px;
  font-weight: bolder;
  position: absolute;
  z-index: 2;
  padding: 40px 0 15px 0;
  text-align: center;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 0fr);
  grid-template-rows: repeat(4, 0fr);
  gap:0 5px;
  justify-content: center;
  z-index: 0;

}
.grid-item {
  border: 1px solid rgb(89, 75, 33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 220px;
  box-shadow: 5px 5px 5px rgb(77, 51, 31); 
  margin: 30px 0 100px 0;
  }
.crudBtn {
    color: var(--font);
    height: 50px;
    width: 140px;
    background-color: var(--dark-beige);
    border: 2px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    margin-top: 15px;
    padding: 2px;
    cursor: pointer;
    text-decoration-color: var(--font);
    border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#907e65 0 -3px 0 inset;
  box-sizing: border-box;
  color:var (--font);
}
.crudBtn:hover{
    color: var(--hover);
    cursor: pointer;
}
.active{
  height: 40px;
    width: 50px;
    font-size: 20px;
    background-color: var(  --background_taupe);
    border: 1px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    margin-top: 15px;
    padding: 5px;
    margin: 20px 4px 10px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration-color: var(--font);
  color: var(--hover);

}

.callCats {
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
  font-size: 28px;
  margin: 40px 0 10px 0;
  color: var(--hover);
}

.callCats:focus {
  box-shadow: #3c301b 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
}

.callCats:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
  transform: translateY(-2px);
  color: rgb(41, 28, 23);
}

.callCats:active {
  box-shadow: #907e65 0 3px 7px inset;
  transform: translateY(2px);
}
.callCats:link{
    text-decoration: none;
  }
p{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.nextPrevBtn{
  color: var(--font);
    height: 40px;
    width: 50px;
    font-size: 20px;
    background-color: var(  --background_taupe);
    border: 1px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    margin-top: 15px;
    padding: 5px;
    margin: 20px 4px 10px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration-color: var(--font);
}
.nextPrevBtn:hover{
    color: var(--hover);
    cursor: pointer;
    
}

.availKittens{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
@media (min-width: 490px) and (max-width: 600px){
  .kittenImg{
  width: 200px;
  min-height: 250px;
  object-fit: cover;
  margin: 10px 0 10px 0;
}
.grid-item {
  width: 200px;
  height: 220px;
 font-size: 21px;
  }
  .kittensCrud{
  padding: 15px 0 15px 0;
  gap:5px 30px;
  margin-top: 30px;

  }
  .nextPrevBtn{
  
    margin-top: 15px;
    padding: 5px;
    margin: 20px 4px 20px 4px;
 
}
}
@media (min-width: 601px) and (max-width: 800px){
  .kittenImg{
  width: 250px;
  min-height: 250px;
  margin: 10px 0 10px 0;
}
.grid-item {
  width: 250px;
  height: 220px;
  }
  .kittensCrud{
  padding: 0px 0 15px 0;
  gap:5px 30px;
  margin-top: 40px;
}
.nextPrevBtn{ 
    height: 50px;
    width: 60px;
    font-size: 20px;   
    padding: 5px;
    margin: 20px 8px 15px 8px;
}
.active{
  height: 50px;
    width: 60px;
}
}
@media (min-width: 801px) and (max-width: 1100px){
  .kittenImg{
  width: 220px;
  min-height: 250px;
  margin: 10px 0 10px 0;
}
.grid-item {
  width: 220px;
  height: 220px;
 font-size: 21px;
 margin-bottom: 110px;
  }
  .kittensCrud{
  padding: 15px 0 15px 0;
  gap:5px 30px;
  margin-top: 30px;
  grid-template-columns: repeat(3, 0fr);
  grid-template-rows: repeat(4, 0fr);
}
.nextPrevBtn{ 
    height: 50px;
    width: 60px;
    font-size: 20px;   
    padding: 5px;
    margin: 20px 8px 20px 8px;
}
.active{
  height: 50px;
  width: 60px;
  margin: 20px 8px 20px 8px;
}
}
@media (min-width: 1101px) and (max-width: 1749px){
  .kittenImg{
  width: 220px;
  min-height: 250px;
  margin: 10px 0 10px 0;
}
.grid-item {
  width: 220px;
  height: 220px;
 font-size: 21px;
 margin-bottom: 110px;
  }
  .kittensCrud{
  padding: 15px 0 15px 0;
  gap:5px 30px;
  margin-top: 30px;
  grid-template-columns: repeat(4, 0fr);
  grid-template-rows: repeat(4, 0fr);
}
.nextPrevBtn{ 
    height: 50px;
    width: 60px;
    font-size: 20px;   
    padding: 5px;
    margin: 20px 8px 20px 8px;
}
.active{
  height: 50px;
  width: 60px;
  margin: 20px 8px 20px 8px;
}
}
@media (min-width: 1750px){
  .kittenImg{
  width: 320px;
  min-height: 352px;
  object-fit: cover;
  margin: 10px 0 10px 0;
}
.crudBtn{
  font-size: 24px;
}
.kittensCrud{
  position: absolute;
  z-index: 2;
  padding: 45px 0 45px 0;
  text-align: center;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-template-rows: repeat(4, 0fr);
  gap: 20px 20px;
  justify-content: center;
  z-index: 0;

}
.grid-item {
  border: 1px solid rgb(89, 75, 33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  box-shadow: 5px 5px 5px rgb(77, 51, 31); 
  margin: 40px 0 150px 0;
  }

p{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.nextPrevBtn{
  color: var(--font);
    height: 50px;
    width: 50px;
    background-color: var(  --background_taupe);
    border: 1px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    padding: 10px;
    margin: 15px 7px 7px 7px;
    cursor: pointer;
    text-decoration-color: var(--font);
}
.active{
  height: 50px;
  width: 50px;
  margin: 15px 7px 7px 7px;
}
}
`
export default CrudWrap;