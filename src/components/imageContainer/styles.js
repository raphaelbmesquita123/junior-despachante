import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: orange;

  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0 2rem 2rem 2rem;

    label {
      position: relative;
      margin: 0.5rem;
      width: 18rem;
      .reactIcon {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        font-size: 1rem;
        color: var(--blue-700);
      }
      input {
        padding: 1.2rem;
        border: none;
        background: var(--gray);
        border-radius: 0.5rem;
        width: 100%;

        &:focus {
          box-shadow: 0 0 0 0;
          outline: 0;
        }

        &[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
        &[type='number'] {
          -moz-appearance: textfield;
          appearance: textfield;
        }
      }
      @media (max-width: 950px) {
        width: 100%;
        margin: 0.5rem 0;
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 13rem;
      margin: auto;
      height: 3.4rem;
      background-color: var(--blue-700);
      color: var(--gray);
      text-align: center;
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: none;
      margin: 0.5rem;
      transition: all 0.3s;

      &:hover {
        filter: brightness(80%);
      }

      &:focus {
        border: none;
        box-shadow: none;
      }
      p {
        margin-left: 0.5rem;
      }

      @media (max-width: 950px) {
        width: 100%;
        margin: 0.5rem 0 0.5rem 0;
      }
    }
  }
`
