export const mockRepository = () => ({
  createQueryBuilder: jest.fn().mockReturnThis(),
  leftJoinAndSelect: jest.fn().mockReturnThis(),
  getMany: jest.fn(),
  where: jest.fn().mockReturnThis(),
});
