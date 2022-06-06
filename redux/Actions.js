export const nextSong = () => {
    return {
        type: 'NEXT_SONG',
    }
}
export const leftBarSelect = (id) => {
    return {
        type: 'LEFTBAR_SELECT',
        payload: {
            id: id
        }
    }
}