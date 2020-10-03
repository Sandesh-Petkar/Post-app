import { ADD_POST_ACTION } from "../Actions/ActionTypes";


const initialState={
        posts:[]
}

const reducer = (state=initialState,action) => {

        switch(action.type){
            case ADD_POST_ACTION:

                return {
                    posts:[
                        ...state.posts,
                        {
                        title:action.payload.title,
                        desc:action.payload.desc,
                        }
                    ]
                
                
                };
                

            default:return state;
        }
}

export default reducer;