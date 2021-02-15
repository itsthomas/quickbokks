import React, { useState } from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    display: contents;
    background-color: #fff;
    padding: 0 18px;

    p {
        padding: 0 18px 0 40px;
    }
`;

const AccordionList = styled.li`
    position: relative;
    width: 100%;
    background-color: #fff;
    color: #444;
    border: none;
    list-style-type: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    cursor: pointer;
    transition: 0.4s;
    padding: 10px;

    @media (min-width: 768px) {
        padding: 10px 40px 10px;
    }

    &:after {
        position: absolute;
        top: 10px;
        right: 10px;

        @media (min-width: 768px) {
            right: 40px;
        }
        content: '\\25BC';
        font-size: 12px;
        color: #777;
        float: right;
        transform: ${(props)=> props.showPanel ? 'rotate(-180deg)':'rotate(0)'};
    }
`;

const Accordion = ({index, data}) => {
    const [showPanel, setShowPanel] = useState(false);

    const onAccordionListClick = (e) => {
        setShowPanel(!showPanel);
    }

    return (
        <>
            <AccordionList onClick={(e)=>onAccordionListClick(e)} showPanel={showPanel}>{data.question}</AccordionList>
            {
            showPanel && 
            <Panel>
                <p>{data.answer}</p>
            </Panel>
            }
            <hr></hr>
        </>        
    )
};

export default Accordion;
