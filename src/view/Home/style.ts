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