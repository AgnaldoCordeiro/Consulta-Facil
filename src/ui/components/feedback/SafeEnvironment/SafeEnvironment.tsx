import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@mui/material";

const SafeEnvironment = () => {
    return (
        <Container>
            <SafeEnvironmentContainer>
                Ambiente Seguro <i className={'twf-lock'} />
            </SafeEnvironmentContainer>
        </Container>
    )
}

export default SafeEnvironment;