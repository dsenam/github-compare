import React, { Component } from "react";
import api from "../../services/api";
import moment from "moment";

import logo from "../../assets/logo.svg";
import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
    state = {
        repositoryInput: "",
        repositories: [],
        repositoryError: false,
        loading: false
    };

    handleAddRepository = async event => {
        event.preventDefault();

        this.setState({ loading: true });

        try {
            const { data: repository } = await api.get(
                `/repos/${this.state.repositoryInput}`
            );
            repository.lastCommit = moment(repository.pushed_at).fromNow();
            this.setState({
                repositoryInput: "",
                repositories: [...this.state.repositories, repository],
                repositoryError: false
            });
        } catch (error) {
            this.setState({
                repositoryError: true
            });
            console.log(error);
        } finally {
            this.setState({
                loading: false
            });
        }
    };
    render() {
        return (
            <Container>
                <img src={logo} alt="Github logo" />

                <Form
                    withError={this.state.repositoryError}
                    onSubmit={this.handleAddRepository}
                >
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
                    <button type="submit">
                        {this.state.loading ? (
                            <i classname="fa fa-spinner fa-pulse" />
                        ) : (
                            "OK"
                        )}
                    </button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
