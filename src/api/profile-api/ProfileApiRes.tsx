export interface ProfileApiRes {
  data: {
    id: number;
    user_name: string;
    image: string;
    address: string;
    township: string;
    phone_number: string;
    user_id: number;
    user: {
      id: 63;
      email: string;
      user_name: string;
      role_as: number;
      type: string;
      caregiver: {
        id: number;
        first_name: string;
        last_name: string;
        gender: string;
        date_of_birth: string;
        relationship_with_member: string;
        user_id: number;
      };
    };
  };
}
