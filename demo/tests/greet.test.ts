/**
 * https://qiita.com/mangano-ito/items/99dedf88d972e7e631b7
 */

import greet from "#/greet";

describe('greet', (): void => {
    test('should say hello to Tom.', (): void => {
        const response: string = greet('Tom');
        expect(response).toBe('Hello, Tom!');
    });
})