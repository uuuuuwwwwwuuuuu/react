export default class GetResource {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getData = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could't fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  }

  getAllCharacters = async () => {
    const res = await this.getData("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const res = await this.getData(`/characters/${id}`);
    return this._transformCharacter(res);
  }

  getAllHouses = async () => {
    const res = await this.getResource('/houses/');
    return res.map(this._transformHouse);
  }

  getHouse = async (id) => {
    const res = await this.getData(`/houses/${id}`);
    return this._transformHouse(res);
  }

  getAllBooks = async () => {
    const res = await this.getData('/books/');
    return res.map(this._transformBook);
  }

  getBook = async (id) => {
    const res = await this.getData(`/books/${id}`);
    return this._transformBook(res);
  }

  _transformCharacter = (char) => {
    return {
      name: char.name || 'No information found',
      gender: char.gender || 'No information found',
      born: char.born || 'No information found',
      died: char.died || 'No information found',
      culture: char.culture || 'No information found'
    }
  }

  _transformHouse = (house) => {
    return {
      name: house.name || 'No information found',
      region: house.region || 'No information found',
      words: house.words || 'No information found',
      titles: house.titles || 'No information found',
      overlord: house.overlord || 'No information found',
      ancestralWeapons: house.ancestralWeapons || 'No information found'
    }
  }

  _transformBook = (book) => {
    return {
      name: book.name || 'No information found',
      numberOfPages: book.numberOfPages || 'No information found',
      publiser: book.publiser || 'No information found',
      released: book.released || 'No information found'
    }
  }
}