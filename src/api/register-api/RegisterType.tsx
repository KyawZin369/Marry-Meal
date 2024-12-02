export interface RegisterFormValues {
    type: string;
    email: string;
    user_name: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    gender: string;
    relationship_with_members?: string | undefined;
    age: number;
    phone_number: string;
    shop_name?: string | null;
    shop_address?: string | null;
    township?: string | undefined;
    emergency_contact_number: string;
    date_of_birth: string;
    address: string;
    dietary_restriction: string;
    image: string | undefined | null;
  }