import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion/Accordion'

const Container = styled.div`
    padding: 40px 10px 0;
    grid-column-start: 1;
    grid-column-end: none;

    @media (min-width: 768px) {
        grid-column-start: 3;
        grid-column-end: 14;
    }

    @media (min-width: 960px) {
        grid-column-end: 13;
    }
`;

const Wrapper = styled.div`
`;

const Title = styled.h2`
    margin: 0;
    padding-left: 0;

    @media (min-width: 768px) {
        padding-left: 40px;
    }
`;

const FaqQuestions = styled.ul`
    margin-top: 20px;
    padding-left: 0;

    hr {
        border: none;
        height: 1px;
        background-color: #d8d6d6;
    }
`;

const Faq = ({faqs}) => {
    const [faqsList] = useState(Array.from(faqs.map((v, i) => { return {question:v.question, answer:v.answer,showPanel:true}})));

    return (
        <Container>
            <Wrapper>
                <Title>Frequently asked questions</Title>
                <FaqQuestions>
                    <hr></hr>
                    {
                        faqsList.map(
                            (item, index) => 
                            <Accordion key={index} data={item}/>
                        )
                    }
                </FaqQuestions>
            </Wrapper>
        </Container>
    )
};

export default Faq;
