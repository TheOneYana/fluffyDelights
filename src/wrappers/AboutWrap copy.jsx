import styled from "styled-components";

const AboutWrap = styled.div`
.about_container{

}

.founders{
    display: flex;
    flex-direction: column;
}
.text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-beige);
    text-indent: 20px;
    padding: 10px;
    font-size: 0.7em;
}
.img{
    min-width: 375px;
    height: auto;
  
}
img{
    width: 800px;
    height: 500px;
    max-width: 100%;
    display: block;
    object-fit: cover;
    object-position: 37% 25%;

}
.second_img{
        display: none
    }
@media (min-width: 480px) and (max-width: 599px) {
    .text{
      height: auto;
      align-items: center;
    
    }
    .second_img{
        display: none
    }

}
@media (min-width: 600px) and (max-width: 699px) {
.text{
    height: auto;
    align-items: center;

}
.second_img{
    display: none
}
}
@media (min-width: 699px) and (max-width: 799px) {
.text{
    height: auto;
    align-items: center;
}
    .second_img{
    display: none
}
}
@media (min-width: 800px) and (max-width: 868px) {
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

}
.about_container{
    border-left: 3px solid var(--font);
    border-right: 3px solid var(--font);
    width:810px;

}
.founders{
    display: flex;
    flex-direction: row;
    height: 750px;
    
}
.adoption_process{
    display: flex;
    flex-direction: row;
    height: 500px;
    
}
.signing_contract{
    display: flex;
    flex-direction: row;
    
}
.text {
    justify-content: flex-start;
    font-size: 19px;
    width: 966px;
    padding: 18px 10px 0px 14px;
    overflow: scroll;
    align-items: center;
    height: auto;
    }

.img{
    width: 1000px;
    height: auto;

}
img{
    width: 1000px;
    height: 800px;
}
.second_img{
        display: block;

    }
  
}
@media (min-width: 869px) and (max-width: 1004px) {
   .about_container{
    width:910px;
    border-left: 3px solid var(--font);
    border-right: 3px solid var(--font);
   }
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    .founders, .adoption_process, .signing_contract{
    display: flex;
    flex-direction: row;
    
}
.text {
      width: 966px;
}
.img{
    width: 1000px;
    height: auto;

}
img{
    width: 1000px;
    height: 800px;
}
.second_img{
        display: block;
    }
}
@media (min-width: 1005px) and (max-width: 1190px) {
    main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

}
    .about_container{
    border-left: 3px solid var(--font);
    border-right: 3px solid var(--font);
    width:1010px;

}
    .founders, .adoption_process, .signing_contract{
        display: flex;
        flex-direction: row;
    
}
.text {
      width: 966px;
}
.img{
    min-width: 370px;
    height: auto;

}
img{
    width: 977px;
    height: 800px;
}
.second_img{
        display: block;
    }
}
@media (min-width: 1190px) and (max-width: 1350px){
    main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    .about_container{
    border-left: 3px solid var(--font);
    border-right: 3px solid var(--font);
    width: 1100px;
    }
    .founders, .adoption_process, .signing_contract {
    display: flex;
    flex-direction: row;
    
}
.text {
      width: 966px;
}
.img{
    min-width: 370px;
    height: auto;

}
img{
    width: 980px;
    height: 800px;
}

.second_img{
        display: block;
    }
}
@media (min-width: 1351px) and (max-width: 1600px){
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       

}
    .about_container{
    border-left: 3px solid var(--font);
    border-right: 3px solid var(--font);
    width:1310px;

}
    .founders, .adoption_process, .signing_contract{
    display: flex;
    flex-direction: row;
    
}
.text{
    width: 1000px;
}
.img{
    min-width: 370px;
    height: auto;

}
img{
    width: 1010px;
    height: 800px;
}

.second_img{
        display: block;
    }
}
@media (min-width: 1601px) and (max-width: 1723px){
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       

}
    .about_container{
    border-left: 3px solid var(--font);
    border-right: 3px solid var(--font);
    width:1510px;

}
    .founders, .adoption_process, .signing_contract {
    display: flex;
    flex-direction: row;
    
}
.text{
    width: 1200px;
}
.img{
    min-width: 370px;
    height: auto;

}
img{
    width: 1210px;
    height: 800px;
}

.second_img{
        display: block;
    }
}
@media (min-width: 1724px) {
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       

}
    .about_container{
    border-left: 3px solid var(--font);
    border-right: 3px solid var(--font);
    width:1410px;

}
    .founders, .adoption_process, .signing_contract {
    display: flex;
    flex-direction: row;
    
}
.text{
    width: 1300px;
    font-size: 28px;
}
.img{
    min-width: 370px;
    height: auto;

}
img{
    width: 1320px;
    height: 900px;
}

.second_img{
        display: block;
    }
}

`
export default AboutWrap;