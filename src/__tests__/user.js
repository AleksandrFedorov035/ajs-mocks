jest.mock('../http');

import { getLevel } from '../getLevel';
import fetchData from '../http';
import { createFetchData } from './createFetchData';

describe("getLevel", () => {
    test('return level', () => {
        const fetchDataMock = createFetchData(10);

        fetchData.mockImplementation(fetchDataMock);

        expect(getLevel(1)).toBe("Ваш текущий уровень: 10")
    });

    test("return error", () => {
        const fetchDataMock = createFetchData()

        fetchData.mockImplementation(fetchDataMock);

        expect(getLevel(1)).toBe('Информация об уровне временно недоступна')
    })
})