import React from "react";
import { FooterContainer, FooterStyled } from "./Footer.style";
import { Typography, Box } from "@mui/material";


const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>               
              <Box sx={{ maxWidth: '800px' }}>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        <a className="a-footer" href="https://www.linkedin.com/in/agnaldo-gabriel-61527112a/" target="_blank" rel="noreferrer">
                            <p className="text-muted">&copy; 2021 AgnaldoCordeiro • Direitos Reservados. Inc. Desenvolvido por AgnaldoCordeiro.</p>
                        </a>
                    </Typography>
                </Box>
            </FooterContainer>
        </FooterStyled>

    )
}

export default Footer;