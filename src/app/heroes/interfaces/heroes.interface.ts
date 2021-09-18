export interface Heroe {
    id?:                string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:           string; //http://. ... path de la imagen
    img_avatar:         string; //http://. ... path de la imagenimg_avatar: ''
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
