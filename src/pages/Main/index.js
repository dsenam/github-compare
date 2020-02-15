import React from "react";

import logo from "../../assets/logo.svg";
import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default function Main() {
    return (
        <Container>
            <img src={logo} alt="Github logo" />

            <Form>
                <input type="text" placeholder="usuário/repositório" />
                <button type="submit">OK</button>
            </Form>
            <CompareList />
        </Container>
    );
}
