import styled from "styled-components";

const CrudWrap = styled.div`
.kittenImg{
  width: 320px;
  min-height: 352px;
  object-fit: cover;
  margin: 10px 0 10px 0;
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
  border: 1px solid rgb(183, 117, 170);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  box-shadow: 5px 5px 5px rgb(160, 154, 162); 
  margin: 40px 0 150px 0;
  }
.crudBtn {
    color: var(--font);
    height: 50px;
    width: 240px;
    background-color: var(--dark-beige);
    border: 2px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    margin-top: 15px;
    padding: 2px;
    cursor: pointer;
    text-decoration-color: var(--font);
}
.crudBtn:hover{
    color: var(--hover)
}
`
export default CrudWrap;