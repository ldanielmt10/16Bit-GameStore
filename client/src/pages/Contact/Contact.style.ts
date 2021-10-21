import styled from 'styled-components'
import { Container } from '../../GlobalStyles/GlobalStyles'

export const ContainerContact = styled(Container)`
    height: calc(100vh - 310px);
    @media screen and (max-width: 414px){
      height: 100vh;
    }
`
// export const Logo = styled.img`
//      width: 40px;
//     @media screen and (max-width: 414px){
      
//     }
// `

export const ContactForm = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 414px){
      justify-content: flex-start;
      padding-top: 15%;
   }
`

export const ContactUs = styled.h2`
   font-size: 2.5rem;
   @media screen and (max-width: 414px){
      font-size: 1.7rem;
   }
`
export const SendForm = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
    width: 40%;
    height: 70%;
    border: 2px solid #00a8ff;
    background: rgba(250, 250, 250, 0.1);
    backdrop-filter: blur(5px);

    @media screen and (max-width: 414px){
      width: 90%;
      height: 65%;
   }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 2%;
    width: 40%;
    height: 70%;
    border: 2px solid #00a8ff;
    background: rgba(250, 250, 250, 0.1);
    backdrop-filter: blur(5px);

    @media screen and (max-width: 414px){
     width: 90%;
     height: 65%; 
   }

    label{
       margin-top: 5%;
       height: 5%;
       width: 100%;
       font-size: 1.3rem;
       border-radius: 5px;
    }
    input {
       height: 7%;
       width: 100%;
       padding: 1rem;
       font-size: 1rem;
       border-radius: 5px;
       border: none;
       color: rgb(50, 50, 50);
       &:focus{
        outline: none;
       } 
    }
    textarea{
       height: 30%;
       width: 100%;
       border: none; 
       padding: .5rem 1rem;
       font-size: 1rem;
       border-radius: 5px;
       color: rgb(50, 50, 50);
       &:focus{
        outline: none;
       }
    } 
    button{
       margin-top: 5%; 
       height: 8%;
       width: 100%;
       border: none;
       font-size: 1rem;
       border-radius: 5px; 
       background: #00a8ff;  
       color: #ffffff;
       font-weight: bold;

       &:hover{
          background: rgb(140, 46, 133);
       }
       &:focus{
        outline: none;
       }
    }
`