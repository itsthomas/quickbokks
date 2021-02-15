import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const Container = styled.div`
    grid-column-start: 1;
    grid-column-end: none;
    position: relative;
    background-color: #f0f3f5;
    padding: 40px;

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

const Title = styled.h1`
    margin: 0;
`;

const InputsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;

    input {
        width: 100%;
        padding: 5px;
    }

    margin-top: 40px;
`;

const TotalContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        position: absolute;
        left: 88%;
        width: 37%;
    }
`;

const Total = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 100px;
    background-image: linear-gradient(to right, #2e9e02 , #04b9aa);
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    
`;

const TotalValue = styled.div`
`;

const InputGroup = styled.div`
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;

    input {
        margin-top: 10px;
    }

    @media (min-width: 768px) {
        width: 35%;
        margin-right: 40px;
    }
`;

const SocialMediaShareContainer = styled.div`
    margin-top: 20px;
`;

const SocialMediaShareIcons = styled.div`
    ul {
        list-style: none;
        padding-left: 0;

        li {
            margin-right: 8px;
            margin-bottom: 8px;
            display: inline-block;
            i {
                color: #fff;
                background: #2b2a2a;
                padding: 11px;
                border-radius: 50%;
                font-size: 18px;
                height: 40px;
                width: 40px;
                text-align: center;
                transition: all .4s ease 0s;
            }
        }

    }
`;

const Calculator = () => {
    const [total, setTotal] = useState(0);
    const [incomeFromSales, setIncomeFromSales] = useState(0);
    const [commissions, setCommissions] = useState(0);
    const [construction, setConstruction] = useState(0);
    const [otherIncome, setOtherIncome] = useState(0);

    useEffect(() => {
        setTotal(parseFloat(incomeFromSales !== '' ?incomeFromSales:0) 
        + parseFloat(commissions !== '' ?commissions:0) 
        + parseFloat(construction  !== '' ? construction:0) 
        + parseFloat(otherIncome  !== '' ? otherIncome:0));
    },[incomeFromSales, commissions, construction, otherIncome]);


    return (
        <Container>
            <Wrapper>
                <Title>The Calculator</Title>
                <InputsContainer>
                    <TotalContainer>
                        <label htmlFor="total">Total:</label>
                        <Total><TotalValue data-testid='total-value'>{`£${total}`}</TotalValue></Total>
                    </TotalContainer>

                    <InputGroup>
                        <label htmlFor="income-from-sales">Income from sales:</label>
                        <input data-testid="total-part" type="number" id="income-from-sales" name="income-from-sales" value={incomeFromSales} onChange={(e)=>setIncomeFromSales(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="commissions">Commissions:</label>
                        <input data-testid="total-part" type="number" id="commissions" name="commissions" value={commissions} onChange={(e)=>setCommissions(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="construction">Construction:</label>
                        <input data-testid="total-part" type="number" id="construction" name="construction" value={construction} onChange={(e)=>setConstruction(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="other-income">Other income:</label>
                        <input data-testid="total-part" type="number" id="other-income" name="other-income" value={otherIncome} onChange={(e)=>setOtherIncome(e.target.value)}/>
                    </InputGroup>
                </InputsContainer>

                <SocialMediaShareContainer>
                    <label>Share my results</label>
                    <SocialMediaShareIcons>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com//" title="Facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/company/" title="LinkedIn">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/" title="Pinterest">
                                    <i className="fa fa-pinterest"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" title="Instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/" title="YouTube">
                                    <i className="fa fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" title="Twitter">
                                    <i className="fa fa-envelope"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" title="Twitter">
                                    <i className="fa fa-link"></i>
                                </a>
                            </li>
                          
                        </ul>
                    </SocialMediaShareIcons>
                </SocialMediaShareContainer>
            </Wrapper>
        </Container>
    )
};

export default Calculator;
