import User from './user.model';

export const findMaxUserId = async () => {
  const user = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return user?.id;
};

export const generateUserId = async () => {
  const maxUserId = (await findMaxUserId()) || '0';
  const newUserId = (parseInt(maxUserId) + 1).toString().padStart(5, '0');
  return newUserId;
};
