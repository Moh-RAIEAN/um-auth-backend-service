import { Request, Response } from 'express';
import userService from './user.service';

const createUser = async (req: Request, res: Response) => {
  const { user } = req.body;

  try {
    const result = await userService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'user creation failed',
      error: error,
    });
  }
};

export default { createUser };