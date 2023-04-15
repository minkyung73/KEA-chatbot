import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    const users = [
        {id: 1, name: "Kimgacheon", comment: "안녕하세요. 김가천입니다."}, 
        {id: 2, name: "CaCaOj", comment: "카카오제이입니다~!"}, 
        {id: 3, name: "GaSoon", comment: "가순이입니다. 파이팅!!"},     
    ];

    return (
        <div>
            {users.map((users)=><Comment key={users.id} name={users.name} comment={users.comment} />)}
        </div>
    )
}

export default CommentList;