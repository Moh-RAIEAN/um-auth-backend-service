import IUser from './user.interface';
import User from './user.model';
import config from '../../../config/index';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId();
  user.id = id;
  if (!user.password) {
    user.password = config.defaultUserPassword as string;
  }
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error('user creation filed!');
  }
  return createdUser;
};

export default { createUser };
