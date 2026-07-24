import { describe, expect, it } from 'vitest';
import { isFormValid, validateEmail, validateName } from './validation';

describe('validateName', () => {
  it('returns an error when name is empty', () => {
    expect(validateName('')).toBe('Full name is required.');
  });

  it('returns an error when name is only whitespace', () => {
    expect(validateName('   ')).toBe('Full name is required.');
  });

  it('returns no error for a valid name', () => {
    expect(validateName('Jane Doe')).toBe('');
  });
});

describe('validateEmail', () => {
  it('returns an error when email is empty', () => {
    expect(validateEmail('')).toBe('Email address is required.');
  });

  it('returns an error when email is only whitespace', () => {
    expect(validateEmail('   ')).toBe('Email address is required.');
  });

  it('returns an error for an invalid email format', () => {
    expect(validateEmail('not-an-email')).toBe(
      'Please enter a valid email address.',
    );
    expect(validateEmail('missing@domain')).toBe(
      'Please enter a valid email address.',
    );
    expect(validateEmail('@example.com')).toBe(
      'Please enter a valid email address.',
    );
  });

  it('returns no error for a valid email', () => {
    expect(validateEmail('user@example.com')).toBe('');
    expect(validateEmail('  user@example.org  ')).toBe('');
  });
});

describe('isFormValid', () => {
  it('returns false when name or email is invalid', () => {
    expect(isFormValid({ name: '', email: 'user@example.com' })).toBe(false);
    expect(isFormValid({ name: 'Jane Doe', email: 'bad-email' })).toBe(false);
    expect(isFormValid({ name: '', email: '' })).toBe(false);
  });

  it('returns true when required fields are valid', () => {
    expect(
      isFormValid({ name: 'Jane Doe', email: 'user@example.com' }),
    ).toBe(true);
  });
});
