const defaultPathGenre = "/user/genres";

export const genres = [
    {
        id: "1",
        name: "Hip Hop",
        image_genre: "data:image/jpeg;base64,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",
        path_genre: `${defaultPathGenre}/:id`
    },
    {
        name: "TRAP",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/c1/b3/4f/c1b34f2a-5712-8698-d60f-978aa9e3f9be/source/512x512bb.jpg"
    },
    {
        name: "R&B",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://cdn.dribbble.com/users/1931394/screenshots/9780708/image.png"
    },
    {
        name: "Jazz",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmW8IXbayGR-fFAn8ynDIDJLAhRJiWaIPoHw&usqp=CAU"
    },
    {
        name: "RAP",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://img.freepik.com/vecteurs-libre/mot-neon-rap-microphone-dans-contour-flamme_1262-11901.jpg?size=338&ext=jpgs"
    },
    {
        name: "Blues",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "http://mrweis.files.wordpress.com/2009/03/blues_guitar.jpg"
    },
    {
        name: "Rock",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE0m6f2lmFMvveTuDdttcft6cTHL_a7TFBg&usqp=CAU"
    },
    {
        name: "Rap",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://img.freepik.com/vecteurs-libre/mot-neon-rap-microphone-dans-contour-flamme_1262-11901.jpg?size=338&ext=jpgs"
    },
    {
        name: "Blues",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "http://mrweis.files.wordpress.com/2009/03/blues_guitar.jpg"
    },
    {
        name: "Rock",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE0m6f2lmFMvveTuDdttcft6cTHL_a7TFBg&usqp=CAU"
    },
    {
        name: "Rap",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://img.freepik.com/vecteurs-libre/mot-neon-rap-microphone-dans-contour-flamme_1262-11901.jpg?size=338&ext=jpgs"
    },
    {
        name: "Blues",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "http://mrweis.files.wordpress.com/2009/03/blues_guitar.jpg"
    },
    {
        name: "Rock",
        path_genre: `${defaultPathGenre}/:id`,
        image_genre: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE0m6f2lmFMvveTuDdttcft6cTHL_a7TFBg&usqp=CAU"
    }
]