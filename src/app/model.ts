export interface Game {
 background_image: string;
 name: string;
 id: number;
 released:string;
 metacritic_url:string;
 website:string;
 descption: string;
 metacritic:number;
 genres: Array<Genre>;  
 parent_platforms: Array<ParentPlatform>;
 publishers: Array<Publishers>;
 rating:Array<Rating>;
 screenshots: Array<Screenshots>;
 trailers: Array<Trailer> 
}

export interface ApiResponse<T>{
 results: Array<T>;   
}

interface Genre {
    name: string;
}

interface ParentPlatform {
    platform: {
        id: number;
        name: string;
        slug:string;
    }
}

interface Publishers {
    name: string;
}

interface Rating {
    id: number;
    count:number;
    title:string
}

interface Screenshots {
    image: string;
}

interface Trailer {
    data: {
        max:string
    }
}
