import React from "react";

import "./styles";
import { Container, Repository } from "./styles";

export default function CompareList({ repositories }) {
    return (
        <Container>
            {repositories.map(repository => (
                <Repository key={repository.id}>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <strong>{repository.name}</strong>
                    <small>{repository.owner.login}</small>

                    <ul>
                        <li>
                            {repository.stargazers_count} <small>stars</small>
                        </li>
                        <li>
                            {repository.forks_count} <small>forks</small>
                        </li>
                        <li>
                            {repository.open_issues_count}
                            <small>issues</small>
                        </li>
                        <li>
                            {repository.pushed_at}
                            <small>last commit</small>
                        </li>
                    </ul>
                </Repository>
            ))}
        </Container>
    );
}
