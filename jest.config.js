module.exports = {
    preset: 'ts-jest',
    setupFiles: ["<rootDir>/jest.setup.ts"],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/spec/tsconfig.json'
        }
    }
}