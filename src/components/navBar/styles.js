import styled from "styled-components";

export const ContainerNav = styled.nav`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-around;
    background: var(--blue-900);
    padding: 0rem 2rem;
    height: 5rem;
    img{
        height: 3rem;
    }

    div{
        display: flex;
        a{
            font-family: 'Roboto';
            font-weight: 400;
            color: var(--gray);
            padding: 0.6rem;
            cursor: pointer;
            transition: all 0.4s;
            &:hover{
                color: var(--blue-50);
            }
        }

        @media (max-width: 650px) {
            display: none;
        }
    }
`

export const BurguerContainer = styled.div`
    display: none;

    @media (max-width: 650px) {
        display: block;
    }
`