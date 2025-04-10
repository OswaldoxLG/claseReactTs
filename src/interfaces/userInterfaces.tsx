export interface UserResponse {
  id_user:          number | string;
  username:         string;
  email:            string;
  password:         string;
  image:            string;
  update:           string;
}

export type LoginResponse = UserResponse | false;