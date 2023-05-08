import styled from "styled-components";

const ContactWrap = styled.div`
*{
    margin: 0;
    padding: 0;
}
main{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: flex-start;
}
.container{
    font-family: 'Merienda', cursive;
    display: flex;
    flex-direction: column;
    border: 4 px solid var(--font);
    border-radius: 10px;
    padding: 30px;
    justify-content: center;
    align-items: center;
    width: 900px;
    background-color:  rgb(186, 161, 132);
}
p{
    font-size: 45px;
    font-weight: 400;
}

.contact-form{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: left;
    margin: 10px 0;
 
}

.contact-form label {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 5px 2px 5px;
}

.contact-form .input, .contact-form textarea {
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;
    border: 1px solid var(--font);
    background-color: #ddd3c7;
}
.input_error{
      border-radius: 10px;
    font-size: 18px;
    padding: 10px;
    border: 1px solid var(--font);
    background-color: #ddd3c7;
  color: red;
}
input:focus {
 border: 2px solid  var(--hover);
 outline: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
  transition: background-color 5000s;

}
.name_container{
  width: 100%;
  display: flex;
  flex-direction: column;

}
.notamember {
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 24px;

}
.signOut{
  align-self: center !important;
  
}
.email {
  color: var(--hover);
  font-size: 28px;
}
.inputError{
font-size: 19px;
padding: 3px;
color: red;
display:none;
}
input:invalid[focused="true"] ~ .inputError {
  display: block;
}

.signedIn {
  font-size: 25px;
}
.submitBtn {
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
  font-family: 'Merienda', cursive;
  height: 48px;
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
  font-size: 18px;
  margin-top: 30px;
}

.submitBtn:focus {
  box-shadow: #3c301b 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
}

.submitBtn:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #907e65  0 -3px 0 inset;
  transform: translateY(-2px);
  color: var(--hover);
}

.submitBtn:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}



`
export default ContactWrap;