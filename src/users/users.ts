import { createUserDetails } from 'src/utils/types';

export interface IUserService {
  createUser(userDetail: createUserDetails);
}