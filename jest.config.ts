// jest.config.ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	// Set the custom temporary directory for Jest
	cacheDirectory: "./temp_jest/jest-cache",

	// You can add other Jest configurations here if needed
	preset: "ts-jest", // Optional if you're using ts-jest
	testEnvironment: "node", // Example of other typical settings
};

export default config;
