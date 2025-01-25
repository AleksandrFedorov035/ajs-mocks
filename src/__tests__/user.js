import { getLevel } from '../mock';
import fetchData from '../http';
jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});
test('test getLevel', () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
});