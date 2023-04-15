import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from '../data.json';
import fs from "fs";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
function PostWritePage(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const fs = require('fs');
    // const file = fs.readFile('../data.json');
    // fs.writeFile('../data.json', JSON.stringify(content), 
    // fs.writeFileSync('../test.json', JSON.stringify(content), 
    //     (err) => { if (err) console.log('Error writing file:', err);
    // });

    return (
        <Wrapper>
            <Container>
            <TextInput height={20}  value={title}  
             onChange={(event) => {
                        setTitle(event.target.value);  }}  />
            <TextInput height={480}  value={content}  
             onChange={(event) => {
                        setContent(event.target.value);  }}  />
            <Button title="글 작성하기" onClick={(e) => {
                data.push({id : data.length + 1, title : title, content : content, comments : []});
                navigate("/");  }} />
            </Container>
        </Wrapper>
    ); } 
    
    export default PostWritePage;