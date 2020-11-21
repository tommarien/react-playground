import '@testing-library/jest-dom';
import { enableNetConnect, disableNetConnect } from 'nock';

beforeAll(() => disableNetConnect());
afterAll(() => enableNetConnect());
