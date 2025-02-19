import styled from "styled-components";

const CrudWrap = styled.div`
  /* General Styles */
  .availText {
    background-color: #fff8e1;
    color: #4e342e;
    font-size: 20px;
    line-height: 1.6;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #d7ccc8;
    max-width: 800px;
    margin: 20px auto;
    text-align: center;
  }

  .availText a {
    color: #c71585;
    font-weight: bold;
    text-decoration: none;
  }

  .availText a:hover {
    text-decoration: underline;
  }

  .availContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
  }

  .cats {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 50px 0 0 0;
    background-color: rgb(186, 161, 132);
    height: auto;
  }
  

  .paw {
    max-width: 145px;
    margin-bottom: 25px;
  }

  /* Pagination */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 10px; /* Add spacing between buttons */
  }
  p{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  .callCats{
    background-color: #d7bfa6;
    color: #4e342e;
    font-size: 22px;
    font-weight: bold;
    padding: 12px 24px;
    margin: 20px 0 40px 0;
    border: 2px solid #a68b6d;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
  
    &:hover {
      background-color: #a68b6d;
      color: #fff;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  
    &:active {
      background-color: #8c6b54;
      box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.4);
      transform: translateY(2px);
    }
  }

  .nextPrevBtn,
  .active {
    color: var(--font);
    height: 40px;
    width: 50px;
    font-size: 20px;
    background-color: var(--background_taupe);
    border: 1px solid var(--dark-beige);
    box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration-color: var(--font);
    background-color: #d7bfa6;
    color: #4e342e;
    font-size: 22px;
    font-weight: bold;
    padding: 12px 24px;
    margin: 20px 0 40px 0;
    border: 2px solid #a68b6d;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
  
    &:hover {
      background-color: #a68b6d;
      color: #fff;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  
    &:active {
      background-color: #8c6b54;
      box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.4);
      transform: translateY(2px);
    }
  }

  /* Grid Container */
  .kittensCrud {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    padding: 20px;
    justify-content: center;
    width: 100%;
  }

  /* Grid Items */
  .grid-item {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1; /* Maintain square aspect ratio */
    border: 1px solid rgb(89, 75, 33);
    box-shadow: 5px 5px 5px rgba(77, 51, 31, 0.5);
    overflow: hidden;
    background-color: #fff;
  }

  .kittenImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the grid item */
  }

  /* Buttons */
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
    font-size: 20px;
    text-align: center;
  }

  .crudBtn:hover {
    color: var(--hover);
    cursor: pointer;
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    .kittensCrud {
      grid-template-columns: repeat(2, 1fr); /* Two columns on small screens */
    }

    .nextPrevBtn {
      height: 35px;
      width: 45px;
      font-size: 16px;
    }

    .crudBtn {
      font-size: 18px;
      width: 120px;
    }
  }

  @media (min-width: 601px) and (max-width: 1100px) {
    .kittensCrud {
      grid-template-columns: repeat(3, 1fr); /* Three columns on medium screens */
    }

    .nextPrevBtn {
      height: 40px;
      width: 50px;
      font-size: 18px;
    }

    .crudBtn {
      font-size: 20px;
      width: 140px;
    }
  }

  @media (min-width: 1101px) {
    .kittensCrud {
      grid-template-columns: repeat(4, 1fr); /* Four columns on large screens */
    }

    .nextPrevBtn {
      height: 50px;
      width: 60px;
      font-size: 20px;
    }

    .crudBtn {
      font-size: 22px;
      width: 160px;
    }
  }
`;

export default CrudWrap;

// const CrudWrap = styled.div`
// .availText {
//   background-color: #fff8e1;          /* Soft, light yellow background to contrast with beige */
//   color: #4e342e;                     /* Deep brown color for the text */
//   font-size: 20px;                    /* Adjust font size for readability */
//   line-height: 1.6;                   /* Better readability with increased line spacing */
//   padding: 20px;                      /* Padding inside the text box */
//   border-radius: 12px;                /* Smooth, rounded corners */
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  /* Subtle shadow for depth */
//   border: 1px solid #d7ccc8;          /* Soft, thin border that matches the overall theme */
//   max-width: 800px;                   /* Optional: limit the width of the text box */
//   margin: 20px auto;                  /* Center the text box horizontally with some spacing */
//   text-align: center;                 /* Center-align the text */
// }

// .availText a {
//   color: #c71585;                     /* Highlight the link with magenta */
//   font-weight: bold;                  /* Make the link bold to stand out */
//   text-decoration: none;              /* Remove underline from the link */
// }

// .availText a:hover {
//   text-decoration: underline;         /* Add underline on hover to indicate interactivity */
// }

// .availContainer{
//   display: flex;
//   flex-direction: column; 
//   align-items: center;    
//   justify-content: center; 
//   padding: 20px;
//   gap: 20px; 

// }

// .cats {
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: center;
//   padding: 50px 0 0 0;
//   background-color:  rgb(186, 161, 132);
//   height: 500px;
// }
// .paw {
//   max-width: 145px;
//   margin-bottom: 25px;
// }

// /* .callCats{
//   color: var(--font);
//     height: 50px;
//     width: 190px;
//     background-color: var(--dark-beige);
//     border: 1px solid var(--dark-beige);
//     box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
//     border-radius: 10px;
//     margin: 45px 0 45px 0;
//     padding: 2px;
//     cursor: pointer;
//     text-decoration-color: var(--font);
  
// } */
// .kittenImg{
//   width: 170px;
//   min-height: 250px;
//   object-fit: cover;
//   margin: 10px 0 10px 0;
// }
// .kittensCrud{
//   font-size: 16px;
//   font-weight: bolder;
//   position: relative;
//   z-index: 2;
//   padding: 0px 0 5px 0;
//   text-align: center;
//   width: 100%;
//   min-height: 100%;
//   display: grid;
//   grid-template-columns: repeat(2, 0fr);
//   grid-template-rows: repeat(3, 0fr);
//   gap:0 5px;
//   justify-content: center;
//   z-index: 0;

// }
// .grid-item {
//   border: 1px solid rgb(89, 75, 33);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 170px;
//   height: 220px;
//   box-shadow: 5px 5px 5px rgb(77, 51, 31); 
//   margin: 0px 0 10px 0;
//   }
// .crudBtn {
//   color: var(--font);
//   height: 50px;
//   width: 140px;
//   background-color: var(--dark-beige);
//   border: 2px solid var(--dark-beige);
//   box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
//   border-radius: 10px;
//   margin-top: 15px;
//   padding: 2px;
//   cursor: pointer;
//   text-decoration-color: var(--font);
//   border-radius: 4px;
//   border-width: 0;
//   box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#907e65 0 -3px 0 inset;
//   box-sizing: border-box;
//   color:var (--font);
//   font-size: 20px;
// }
// .crudBtn:hover{
//     color: var(--hover);
//     cursor: pointer;
// }
// .active{
//   height: 40px;
//     width: 50px;
//     font-size: 20px;
//     background-color: var(  --background_taupe);
//     border: 1px solid var(--dark-beige);
//     box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
//     border-radius: 10px;
//     margin-top: 15px;
//     padding: 5px;
//     margin: 20px 4px 10px 4px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     text-decoration-color: var(--font);
//   color: var(--hover);

// }

// .callCats {
//   align-items: center;
//   appearance: none;
//   background-color: var(--dark-beige);
//   border-radius: 4px;
//   border-width: 0;
//   box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#907e65 0 -3px 0 inset;
//   box-sizing: border-box;
//   color:var (--font);
//   cursor: pointer;
//   display: inline-flex;
//   height: 50px;
//   width: 240px;
//   justify-content: center;
//   line-height: 1;
//   list-style: none;
//   overflow: hidden;
//   padding-left: 16px;
//   padding-right: 16px;
//   position: relative;
//   text-align: left;
//   text-decoration: none;
//   transition: box-shadow .15s,transform .15s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   white-space: nowrap;
//   will-change: box-shadow,transform;
//   font-size: 28px;
//   margin: 40px 0 10px 0;
//   color: var(--hover);
// }

// .callCats:focus {
//   box-shadow: #3c301b 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
// }

// .callCats:hover {
//   box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
//   transform: translateY(-2px);
//   color: rgb(41, 28, 23);
// }

// .callCats:active {
//   box-shadow: #907e65 0 3px 7px inset;
//   transform: translateY(2px);
// }
// .callCats:link{
//     text-decoration: none;
//   }
// p{
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 100%;
// }
// .nextPrevBtn{
//   color: var(--font);
//     height: 40px;
//     width: 50px;
//     font-size: 20px;
//     background-color: var(  --background_taupe);
//     border: 1px solid var(--dark-beige);
//     box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
//     border-radius: 10px;
//     margin-top: 15px;
//     padding: 5px;
//     margin: 20px 4px 10px 4px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     text-decoration-color: var(--font);
// }
// .nextPrevBtn:hover{
//     color: var(--hover);
//     cursor: pointer;
  
// }

// .availKittens{
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 40px;
// }
// @media (min-width: 490px) and (max-width: 600px){
//   .kittenImg{
//   width: 200px;
//   min-height: 250px;
//   object-fit: cover;
//   margin: 10px 0 10px 0;
// }
// .grid-item {
//   width: 200px;
//   height: 220px;
//  font-size: 21px;
//   }
//   .kittensCrud{
//   padding: 15px 0 5px 0;
//   gap:5px 30px;
//   margin-top: 30px;

//   }
//   .nextPrevBtn{

//     margin-top: 15px;
//     padding: 5px;
//     margin: 20px 4px 20px 4px;
 
// }
// }
// @media (min-width: 601px) and (max-width: 800px){
//   .kittenImg{
//   width: 250px;
//   min-height: 250px;
//   margin: 10px 0 10px 0;
// }
// .grid-item {
//   width: 250px;
//   height: 220px;
//   }
//   .kittensCrud{
//   padding: 0px 0 5px 0;
//   gap:5px 30px;
//   margin-top: 40px;
// }
// .nextPrevBtn{ 
//     height: 50px;
//     width: 60px;
//     font-size: 20px; 
//     padding: 5px;
//     margin: 20px 8px 15px 8px;
// }
// .active{
//   height: 50px;
//     width: 60px;
// }
// }
// @media (min-width: 801px) and (max-width: 1100px){
//   .kittenImg{
//   width: 220px;
//   min-height: 250px;
//   margin: 10px 0 10px 0;
// }
// .grid-item {
//   width: 220px;
//   height: 220px;
//  font-size: 21px;
//  margin-bottom: 110px;
//   }
//   .kittensCrud{
//   padding: 15px 0 5px 0;
//   gap:5px 30px;
//   margin-top: 30px;
//   grid-template-columns: repeat(3, 0fr);
//   grid-template-rows: repeat(4, 0fr);
// }
// .nextPrevBtn{ 
//     height: 50px;
//     width: 60px;
//     font-size: 20px; 
//     padding: 5px;
//     margin: 20px 8px 20px 8px;
// }
// .active{
//   height: 50px;
//   width: 60px;
//   margin: 20px 8px 20px 8px;
// }
// }
// @media (min-width: 1101px) and (max-width: 1749px){
//   .kittenImg{
//   width: 220px;
//   min-height: 250px;
//   margin: 10px 0 10px 0;
// }
// .grid-item {
//   width: 220px;
//   height: 220px;
//  font-size: 21px;
//  margin-bottom: 110px;
//   }
//   .kittensCrud{
//   padding: 15px 0 5px 0;
//   gap:5px 30px;
//   margin-top: 30px;
//   grid-template-columns: repeat(4, 0fr);
//   grid-template-rows: repeat(4, 0fr);
// }
// .nextPrevBtn{ 
//     height: 50px;
//     width: 60px;
//     font-size: 20px; 
//     padding: 5px;
//     margin: 20px 8px 20px 8px;
// }
// .active{
//   height: 50px;
//   width: 60px;
//   margin: 20px 8px 20px 8px;
// }
// }
// @media (min-width: 1750px){
//   .kittenImg{
//   width: 320px;
//   min-height: 352px;
//   object-fit: cover;
//   margin: 10px 0 10px 0;
// }
// .crudBtn{
//   font-size: 24px;
// }
// .kittensCrud{
//   position: relative;
//   z-index: 2;
//   padding: 45px 0 5px 0;
//   text-align: center;
//   width: 100%;
//   min-height: 100%;
//   display: grid;
//   grid-template-columns: repeat(4, 0fr);
//   grid-template-rows: repeat(4, 0fr);
//   gap: 0px 5px;
//   justify-content: center;
//   z-index: 0;

// }
// .grid-item {
//   border: 1px solid rgb(89, 75, 33);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 320px;
//   height: 350px;
//   box-shadow: 5px 5px 5px rgb(77, 51, 31); 
//   margin: 20px 0 50px 0;
//   }

// p{
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 100%;
// }
// .nextPrevBtn{
//   color: var(--font);
//     height: 50px;
//     width: 50px;
//     background-color: var(  --background_taupe);
//     border: 1px solid var(--dark-beige);
//     box-shadow: inset 0px 0px 4px 0px rgba(50, 29, 0, 1);
//     border-radius: 10px;
//     padding: 10px;
//     margin: 15px 7px 7px 7px;
//     cursor: pointer;
//     text-decoration-color: var(--font);


  
// }
// .active{
//   height: 50px;
//   width: 50px;
//   margin: 15px 7px 7px 7px;
// }
// }
// `
// export default CrudWrap;