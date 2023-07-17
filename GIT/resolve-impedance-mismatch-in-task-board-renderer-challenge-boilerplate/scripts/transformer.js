// solution code
export const transform = data => {
    return data.boards.map(board=>
        {
                return{
                    'boardId':board.boardId,
                    'boardTitle':board.boardTitle,
                    'lists':data.lists.filter(list=>board.boardId==list.boardId)
                    .map(list=>{
                        return{
                            'listID':list.listID,
                            'listTitle':list.listTitle,
                            'cards':data.cards.filter(card=>card.listID==list.listID)
                            .map(card=>{
                                return{
                                    'cardID':card.cardID,
                                    'cardTitle':card.cardTitle,
                                    'comments':data.comments.filter(comments=>comments.cardID==card.cardID)
                                    .map(comments1=>{
                                        return{
                                            'commentId':comments1.commentId,
                                            'commentText':comments1.commentText
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
    })
};