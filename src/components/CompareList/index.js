import React from "react";

import "./styles";
import { Container, Repository } from "./styles";

export default function CompareList() {
    return (
        <Container>
            <Repository>
                <img
                    src="https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg"
                    alt="imagem"
                />
                <strong>react</strong>
                <small>facebook</small>

                <ul>
                    <li>
                        95,019 <small>stars</small>
                    </li>
                    <li>
                        95,019 <small>forks</small>
                    </li>
                    <li>
                        95,019 <small>issues</small>
                    </li>
                    <li>
                        95,019 <small>last commit</small>
                    </li>
                </ul>
            </Repository>
        </Container>
    );
}
