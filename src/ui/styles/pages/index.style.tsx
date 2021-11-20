import { styled } from "@mui/material/styles";


export const FormElementsContainer = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
gap: ${({ theme }) => theme.spacing(1)};
max-width: 650px;
margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;





