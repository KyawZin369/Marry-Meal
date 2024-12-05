export type Meal = {
    id : number,
    name: string,
    ingredients: string,
    allergy_information: string,
    nutritional_information: string
    dietary_restrictions: string,
    price: number,
    is_frozen: boolean,
    delivery_status: string,
    image: string,
    temperature: string,
    is_preparing: boolean,
    is_finished: boolean,
    is_pickup: boolean,
    is_delivered: boolean,
    partner_id: number
  }

export interface resMeals{
    data: {
        data: Meal[]
    }
}