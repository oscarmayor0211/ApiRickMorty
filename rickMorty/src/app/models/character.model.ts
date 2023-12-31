export interface Character {
    info: {
      count: number,
      pages: number,
      next: string,
      prev: string
    },
    results: [
      {
        id: number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        image: string,
        url: string,
        created: string
        origin: {
          name: string,
          url: string
        },
        location: {
          name: string,
          url: string,
        },
        
        episode: [
          string
        ],
        
      },
    ]
  }
  