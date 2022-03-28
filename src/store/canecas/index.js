const INITIAL_STATE = [
    {
        name: 'Boku no Hero',
        url:
            'https://res.cloudinary.com/djrpjvltd/image/upload/v1648168922/Loja%20If.confeccoes/canecas/caneca-anime-boku-no-hero-gca063-os-sete-pecados-capitais_rlnn7p.jpg'
    },
    {
        name: 'Dragon Ball Z',
        url:
            'https://res.cloudinary.com/djrpjvltd/image/upload/v1648168922/Loja%20If.confeccoes/canecas/caneca-anime-dragon-ball-goku-gca013-quadro-nerd_odekmu.jpg'
    },
    {
        name: 'Sete Pecados Capitais',
        url:
            'https://res.cloudinary.com/djrpjvltd/image/upload/v1648168922/Loja%20If.confeccoes/canecas/caneca-anime-nanatsu-no-taizai-meliodas-gca011-decoracao-anime_hoqjzs.jpg'
    }
]

export const addCaneca = (caneca) => {
    return {
        type: 'ADD_CANECA',
        caneca
    }
}

export default function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_CANECA') {
        return [...state, action.caneca]
    }
    return state
}