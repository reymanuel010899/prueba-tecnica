export type customer = 
    {
        id: number, 
        birth_date: string,
        created_at: string,
        is_active: boolean,
        maternal_last_name: string,
        paternal_last_name: string,
        phone: string,
        user?: {
            gmail: string,
            username: string,
            nombre: string,

        }
        adress: {
            id: number
            city: string,
            state: string,
            street: string
            number: number,
            country: string
        }
    }

    export type address = {
        id: number, street: string, city: string, state: string, number: number, country: string
    }