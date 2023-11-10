class Livro {
    constructor(titulo, autor, numeroDePaginas) {
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    detalhes() {
        console.log(`O nome do livro é ${this._titulo}, do ${this._autor} e tem ${this._numeroDePaginas} páginas!`);
    }
}
const livro = new Livro("Código limpo", "Fulano", 350);
livro.detalhes();
console.log(livro.titulo);
livro.titulo = 'Fulaninho';
livro.detalhes();
