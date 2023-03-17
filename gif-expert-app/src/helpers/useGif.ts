export const useGif = async(category : string) : Promise<any> => {
    const api = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Fisb0TLuq5EzXC4ae3OU8ItKtAzRlAeJ&q=${category}&limit=10`)
    let dataRequest : Object = {};
    await api.json()
        .then(({data}) => {
            dataRequest = data.map((element : any) => ({
                id : element.id,
                title : element.title,
                url : element.images.downsized_medium.url
            }))
        });
    return dataRequest;
}