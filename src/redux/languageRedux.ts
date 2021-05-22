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
            name: "英文",
            code: "en"
        }
    ]
}

export default (store: LanguageRedux = defaultState, action) => {
    console.log(store, action);
    return store
}