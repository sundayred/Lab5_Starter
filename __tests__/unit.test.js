// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber returns true for valid phone numbers', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});

test('isPhoneNumber returns false for invalid phone numbers', () => {
  expect(isPhoneNumber('123-1123')).toBe(false);
  expect(isPhoneNumber('abc-avd-efvs')).toBe(false);
});

test('isEmail returns true for valid emails', () => {
  expect(isEmail('sey031@ucsd.edu')).toBe(true);
  expect(isEmail('testingcenter@ucsd.edu')).toBe(true);
});

test('isEmail returns false for invalid emails', () => {
  expect(isEmail('ucsd@geisel')).toBe(false);
  expect(isEmail('@@google.com')).toBe(false);
});

test('isStrongPassword returns true for strong passwords', () => {
  expect(isStrongPassword('Ujy7')).toBe(true);
  expect(isStrongPassword('V_qwmjrrQ52')).toBe(true);
});

test('isStrongPassword returns false for weak passwords', () => {
  expect(isStrongPassword('1a23')).toBe(false);
  expect(isStrongPassword('12345678910121211314151617181920')).toBe(false);
});

test('isDate returns true for valid dates', () => {
  expect(isDate('5/5/2026')).toBe(true);
  expect(isDate('11/11/2000')).toBe(true);
});

test('isDate returns false for invalid dates', () => {
  expect(isDate('05/05/26')).toBe(false);
  expect(isDate('May 5th, 2026')).toBe(false);
});

test('isHexColor returns true for valid hex codes', () => {
  expect(isHexColor('#abc')).toBe(true);
  expect(isHexColor('#6c524c')).toBe(true);
});

test('isHexColor returns false for invalid hex codes', () => {
  expect(isHexColor('#UIU1234')).toBe(false);
  expect(isHexColor('#12345')).toBe(false);
});
