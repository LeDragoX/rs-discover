const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      },
    ],
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade – Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      },
    ],
  },
]

// 1
const totalCategories = booksByCategory.length

console.log(totalCategories)
for (let category of booksByCategory) {
  console.log(`Total de livros da categoria: ${category.category} (${category.books.length})`)
}

function countAuthors(booksByCategory) {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log(`Total de autores: ${authors.length}`)
}

// 2
countAuthors(booksByCategory)

// 3
function booksOfAuthor(booksByCategory, authorName) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === authorName) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${authorName}: ${books.join(', ')}`)
}

booksOfAuthor(booksByCategory, 'Augusto Cury')

// 4
booksOfAuthor(booksByCategory, 'George S. Clason')
