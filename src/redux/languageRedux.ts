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

export default (store: LanguageRedux = defaultState, action) => {
    switch (action.type){
        case "change_language" :
            const newStore = {...store, language: action.payload}
            return newStore;
        case "new_language" :
            return {
                language: action.payload.key,
                languageList:[
                    ...store.languageList,
                    action.payload
                ]
            }
    }
    //检测行为
    if (action.type === "change_language") {


    }
    return store
}