import { ADD_POST_ACTION } from './ActionTypes';

export const addPostAction = (formPost) => {

        return {
            type:ADD_POST_ACTION,
            payload:formPost
        }
}