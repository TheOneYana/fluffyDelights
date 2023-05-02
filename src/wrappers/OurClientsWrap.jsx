import styled from "styled-components";

const OurClientsWrap = styled.div` 
.container{
display: grid;
flex-direction: row;
justify-content: center;
grid-template-columns: repeat(1, 0fr);
grid-template-rows: repeat(8, 0fr);
padding-bottom: 60px;
} 
.grid-item{
width: 350px;
height: auto;
border: 2px solid var(--hover);
margin: 10px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.name{
margin-left: 10px;
text-decoration:underline dotted var(--hover);
}
.clientImg{
height: 300px;
margin: 10px 10px 0px 10px;
}
.statement{
margin-top: 10px;
font-size: 26px;
}
@media (min-width: 600px) and (max-width: 699px) {
}
@media (min-width: 699px) and (max-width: 799px) {
.container{
flex-direction: row;
grid-template-columns: repeat(2, 0fr);
}
.grid-item{
width:330px;
justify-content: start;
}
.clientImg{
height: 400px;
}
.name{
font-size: 24px;
}
.statement{
    font-size: 22px;
}
}
@media (min-width: 800px) and (max-width: 999px) {
.container{
flex-direction: row;
grid-template-columns: repeat(2, 0fr);
}
.grid-item{
justify-content: start;
align-items: flex-start;
}
.clientImg{
height: 400px;
}
}
@media (min-width: 1000px) and (max-width: 1717px) {
.container{
flex-direction: row;
grid-template-columns: repeat(3, 0fr);
}
}
@media (min-width: 1718px) {
.container{
flex-direction: row;

grid-template-columns: repeat(3, 0fr);
padding-bottom: 40px;

}
.grid-item{
justify-content: start;
align-items: flex-start;
width: 550px;
height: auto;
display: block;

}
.clientImg{
height: 400px;
float:left;

}
}
`;

export default OurClientsWrap;