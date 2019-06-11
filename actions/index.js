import { SET_SETTINGS } from './types';


export const setSettings = (theme, fontSize, newsCount) => {
    return {
        type: SET_SETTINGS,
        payload: {
            theme,
            newsCount,
            fontSize
        }
    }
}