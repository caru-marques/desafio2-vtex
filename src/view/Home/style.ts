import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    margin: auto;

    .nav {
        padding: 20px;
        display: flex;
        align-items:center;
        background-color:#401A2D;
        justify-content: space-between;

        .cart {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
        }
    }

    .cadastro {
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .texto {
        width: 50%;
        text-align: center;
        color: #401A2D;
        font-weight: 600;
        font-size: 20px;
    }

    form {
    justify-content: space-around;
    text-align: center;
    }

    input {
    padding: 5px;
    width: 60%;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 12px;
    text-align: center;    
    font-size: 20px;
    background: #fff;
    color: #401A2D;
    cursor: pointer;
}

    .submit {
    margin-top: 50px;
    height: 5rem;
    width: 60%;
    background-size: cover;
    background-color: #401A2D;
    color: #fff;
    }
    .submit:active {
        background-color: #FFB6C1;
    }
    

    #content {
    padding: 5px;
    margin-bottom: 70px;
    font-size: 25px;
    font-weight: 600;
    color: #4169E1;
    }

    section { 
        height: auto;
        width: 100%;
        background: #A68B86;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        grid-gap: 10px 30px;
        grid-auto-columns: 300px;
        
    }

    .product-content {
        margin: 30px 0;
        display: grid;        
        text-align: center;
        width: 300px;
        height: 400px;
        background: #fff;
        border-radius: 12px;
        padding: 12px
    }

    button {        
        height:40px;
        border-radius: 12px;
        background-color: #401A2D;
        cursor: pointer;  
        color: #fff;      
    }
    button:active {
        background-color: #FFB6C1;
    }

    footer {
        height: 100px;        
        text-align: center;     
        color: #fff;
        background-color: #401A2D;
    }
`