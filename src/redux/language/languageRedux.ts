import i18n from "i18next"
import {ADD_LANGUAGE, CHANGE_LANGUAGE, languageActionType} from "./languageAction"

export interface LanguageRedux {
    language: "en" | "zh",
    languageList: { name: string, code: string }[]
}

const defaultState: LanguageRedux = {
    language: "zh",
    languageList: [
        {
            name: "中文",
            code: "zh"
        }, {
            name: "English",
            code: "en"
        }
    ]
}

export default (store: LanguageRedux = defaultState, action:languageActionType ) => {
    switch (action.type){
        case CHANGE_LANGUAGE :
            i18n.changeLanguage(action.payload)
            const newStore = {...store, language: action.payload}
            return newStore;
        case ADD_LANGUAGE :

            return {
                ...store,
                languageList:[
                    ...store.languageList,
                    action.payload
                ]
            }
    }


}