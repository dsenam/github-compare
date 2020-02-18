import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
    state = {
        repositoryInput: "",
        repositories: []
    };

    handleAddRepository = async event => {
        event.preventDefault();

        try {
            const response = await api.get(
                `/repos/${this.state.repositoryInput}`
            );

            this.setState({
                repositoryInput: "",
                repositories: [...this.state.repositories, response.data]
            });
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
            <Container>
                <img src={logo} alt="Github logo" />

                <Form onSubmit={this.handleAddRepository}>
                    <input
                        type="text"
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={event =>
                            this.setState({
                                repositoryInput: event.target.value
                            })
                        }
                    />
                    <button type="submit">OK</button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
